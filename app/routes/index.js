/**
 * Welcome Router.
 */

'use strict';

module.exports = function(app) {
	app.get('/', function(req, res, next) {
	  res.render('contents/index', { title: 'Express' });
	});

  return this;
};