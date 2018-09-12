/**
 * This is Testing Controller Handler
 */

'use strict';

module.exports = function(app) {

  this.index = function(req, res, next) {
    res.render('contents/welcome', { 
      view  : 'welcome',
      message : 'Ini Halaman View',
      user  : {
        name    : 'Hadist',
        email   : 'hadist.m',
        website : 'Engga ada'
      } 
    });

    return res;
  };

  return this;

};