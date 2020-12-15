'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Casts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cast_firstName: {
        type: Sequelize.STRING
      },
      cast_lastName: {
        type: Sequelize.STRING
      },
      cast_phoneNumber: {
        type: Sequelize.STRING
      },
      cast_birthYear: {
        type: Sequelize.INTEGER
      },
      cast_gender: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Casts');
  }
};