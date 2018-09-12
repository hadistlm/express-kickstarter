/**
 * GET Testing page..
 */

'use strict';

module.exports = function(app) {

  var testing = app.controllers.testingController;

  app.get('/testing', testing.index);

  return this;
};