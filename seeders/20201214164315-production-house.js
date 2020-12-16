'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      let data = require('../data-json/prodcution-house.json')
      data.forEach(element => {
        element.createdAt = new Date()
        element.updatedAt = new Date()
      })
      return queryInterface.bulkInsert('ProductionHouses', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('ProductionHouses', null, {})
  }
};
