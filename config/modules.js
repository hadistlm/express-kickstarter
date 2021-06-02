/**
 * ========================
 *      Modules Loader
 * ========================
**/

'use strict';

module.exports = {
	// DEFINE ALL REQUIRED MODULES
	createError: require('http-errors'),
	express: require('express'),
	debug: require('debug'),
	filesystem: require('fs'),
	path: require('path'),
	http: require('http'),
	sequelize: require('sequelize'),
	consign: require('consign'),
	cookieParser: require('cookie-parser'),
	logger: require('morgan'),
	bcrypt: require('bcrypt'),
	cors: require('cors'),
	faker: require('faker')
};