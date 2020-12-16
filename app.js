const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require("body-parser");
const logger = require('./logger');

const { sequelize } = require('./models');
const ntsfRouter = require('./routes/ntsf');
const top3Router = require('./routes/top3');
const pageRouter = require('./routes/page');

const app = express();

app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');

nunjucks.configure('GIFTI/views', {
  express: app,
  watch: true,
});
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
});
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(hpp());
} else {
  app.use(morgan('dev'));
}

//app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './GIFTI/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', pageRouter);
app.use('/ntsf', ntsfRouter);
app.use('/top3', top3Router);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './GIFTI/views/index.html'));
});

app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  logger.info('hello');
  logger.error(error.message);
  next(error);
});

app.use(bodyParser.urlencoded({ extended : false }));

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
