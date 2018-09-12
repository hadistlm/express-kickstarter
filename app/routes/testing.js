/* GET Testing page. */
module.exports = function(app) {

  var testing = app.controllers.testingController;

  app.get('/testing', testing.index);

  return this;
};