/**
 * This is Users Controller Handler
 */

'use strict';

module.exports = function(app) {
  
  var models = app.settings.models;

  this.index = function(req, res, next) {
    models.User.findAll().then(function(users) {
      res.render('contents/usersviews', {
        title: 'Sequelize: Express Example',
        users: users
      });
    });

    return res;
  };

  this.getAll = async function(req, res, next) {
    var users = await models.User.findAll();
    return res.json(users);
  };

  // this.getByName = function(req, res, next) {
  //   var user = User.findByName(req.params.name);
  //   return res.json(user);
  // };

  return this;
};