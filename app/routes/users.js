/**
 * GET Users page.
 */

'use strict';

module.exports = function(app) {

	var user = app.controllers.userController;

	app.get('/users', user.index);

	return this;
};