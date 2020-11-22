const Sequelize = require('sequelize');
const User = require('./ntsf');
const Comment = require('./top3');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
//DB객체를 require 하여 ntsf와 top3 모델에 접근할 수 있다
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;