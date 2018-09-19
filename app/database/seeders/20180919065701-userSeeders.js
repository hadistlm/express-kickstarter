'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     * Return a promise to correctly handle asynchronicity.
    **/
    return queryInterface.bulkInsert('Users', [{
        username: 'JohnDoe',
        password: 'rahasia789'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     * Return a promise to correctly handle asynchronicity.
    **/
    return queryInterface.bulkDelete('Users', null, {});
  }
};
