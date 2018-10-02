/**
 * ========================
 *  PATH & Variable Loader
 * ========================
**/

'use strict';

const modules = require('./modules');

global.__basedir = modules.path.resolve(__dirname, '..');
let path 	  	 = modules.path;

module.exports = {
	// DEFINE ALL REQUIRED PATH
	PATH : {
		App_Path   : path.join(__basedir, '../app'),
		Model_Path : path.join(__basedir, 'app/models'),
		Public_Path: path.join(__basedir, 'public'),
		Views_Path : path.join(__basedir, 'views')
	},
	// DEFINE CUSTOM GLOBAL VARIABLE
	VARIABLE : {
		modules	   : modules
	}
};