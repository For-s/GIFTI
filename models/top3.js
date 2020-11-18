const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      book: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      elec: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      furn: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      leisure: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      food: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      cos: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      clothes: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      inner: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      acc: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      kit: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      bags: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'top3',
      tableName: 'top3s',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
  }
};