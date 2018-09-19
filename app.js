/**
 *
 * Main File to handle all the required function
 *
 * *  Becareful when editing this file
 * ** Beware Only change necessary line
 */

'use strict';

// determine base directories
global.__basedir = __dirname;

var createError  = require('http-errors');
var express 	   = require('express');
var path 		     = require('path');
var cookieParser = require('cookie-parser');
var logger 		   = require('morgan');
var consign 	   = require('consign');
var models       = require(__dirname + '/app/models');

let app = express();

// engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('models', models);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// autoload the app folder
consign({cwd: 'app'})
  .include('controllers')
  .then('routes')
  .into(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
