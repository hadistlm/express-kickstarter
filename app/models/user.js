'use strict';

module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING
    },
    password:{
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },{
    hooks: {
      beforeCreate: function (User, options, fn) {
        User.createdAt = new Date();
        User.updatedAt = new Date();
        fn(null, User);
      },
      beforeUpdate: function (User, options, fn) {
        User.updatedAt = new Date();
        fn(null, User);
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
  };
  
  return User;
};