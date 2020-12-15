var express = require('express');
var router = express.Router();

router.get('/index', (req, res) => {
  res.render('index', { title: 'index' });
});

router.get('/main', (req, res) => {
  res.render('main', { title: 'main' });
});


router.get(/q/, (req, res) => {
  var url = req.url.replace('/', '');
  console.log(url)
  res.render(url,{title: 'url'});
});



module.exports = router;