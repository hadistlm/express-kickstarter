/**
 * This is Users Controller Handler
 */

'use strict';

module.exports = function(app) {

  var models = app.settings.models;

  this.index = function(req, res, next) {
    models.User.findAll().then(function(users) {
      console.log(users);
      res.render('contents/usersviews', {
        title: 'Sequelize: Express Example',
        users: users
      });
    });

    return res;
  };

  // this.getAll = function(req, res, next) {
  //   var users = User.find();
  //   return res.json(users);
  // };

  // this.getByName = function(req, res, next) {
  //   var user = User.findByName(req.params.name);
  //   return res.json(user);
  // };

  return this;
};