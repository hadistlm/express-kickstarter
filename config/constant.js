/**
 * ========================
 *  PATH & Variable Loader
 * ========================
**/

'use strict';

global.MODULES	 = require('../config/modules');
global.__basedir = MODULES.path.resolve(__dirname, '..');

const path 	  	 = MODULES.path;

module.exports = {
	// DEFINE ALL REQUIRED PATH
	PATH : {
		App_Path   : path.join(__basedir, '/app'),
		Model_Path : path.join(__basedir, 'app/models'),
		Public_Path: path.join(__basedir, 'public'),
		Views_Path : path.join(__basedir, 'views')
	},
	// DEFINE CUSTOM VARIABLE
	VARIABLE : {
		testing : 'HAHAHAHHAHA'
	}
};