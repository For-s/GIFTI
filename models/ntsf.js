const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      ntsf: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'ntsf',
      tableName: 'ntsfs',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
};