'use strict';

const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        isEmail: true
      },
      password:{
        type: Sequelize.STRING, 
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      hooks: {
        beforeCreate: function (User, options, fn) {
          User.createdAt = new Date();
          User.updatedAt = new Date();
          User.password = bcrypt.hashSync(User.password, bcrypt.genSaltSync(12));
          fn(null, User);
        },
        beforeUpdate: function (User, options, fn) {
          User.updatedAt = new Date();
          fn(null, User);
        },
        instanceMethods: {
          validPassword: function(password) {
            return bcrypt.compareSync(password, this.password);
          }
        }   
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};