'use strict';

const { bcrypt, faker } = MODULES;

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     * Return a promise to correctly handle asynchronicity.
    **/
    const users = [...Array(10)].map((user) => (
      {
        username: faker.internet.userName(), //faker.unique(faker.internet.userName, [3], { maxRetries: 3 })
        password: bcrypt.hashSync('rahasia789', bcrypt.genSaltSync(12)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ));

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     * Return a promise to correctly handle asynchronicity.
    **/
    return queryInterface.bulkDelete('Users', null, {});
  }
};
