const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      book: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      elec: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      furn: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      leisure: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      food: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      cos: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      clothes: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      inner: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      acc: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      kit: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
      bags: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'gifti',
      tableName: 'top3',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
  }
};