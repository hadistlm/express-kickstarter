/**
 * ========================
 *      Modules Loader
 * ========================
**/

'use strict';

module.exports = {
	// DEFINE ALL REQUIRED MODULES
	express: require('express'),
	debug: require('debug'),
	fs: require('fs'),
	path: require('path'),
	http: require('http'),
	sequelize: require('sequelize'),
	consign: require('consign')
};