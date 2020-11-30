const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      ntsf: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      n: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      t: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      s: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      f: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'gifti',
      tableName: 'ntsf',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
};