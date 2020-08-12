'use strict';

const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     * Return a promise to correctly handle asynchronicity.
    **/
    return queryInterface.bulkInsert('Users', [{
        email: 'john@mail.com',
        username: 'JohnDoe',
        password: bcrypt.hashSync('rahasia789', bcrypt.genSaltSync(12)),
        createdAt: new Date(),
        updatedAt: new Date(),
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
