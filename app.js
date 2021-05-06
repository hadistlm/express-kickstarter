/**
 *
 * Main File to handle all the required function
 *
 * *  Becareful when editing this file
 * ** Beware Only change necessary line
 * *** Only change when you know the consequences
 */

'use strict';

/**
 * ==================================================
 *          Load all the main depedencies
 * ==================================================
 */

  let createError  = MODULES.createError;
  let express 	   = MODULES.express;
  let path 		     = MODULES.path;
  let cookieParser = MODULES.cookieParser;
  let logger 		   = MODULES.logger;
  let consign 	   = MODULES.consign;
  let cors         = MODULES.cors;
  let models       = require(CONSTANT.PATH.Model_Path);

/**
 * ==================================================
 *            Initialize Express Framework
 * ==================================================
 */

  let app = express();

  app.set('views', path.join(__dirname, 'app/views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

/**
 * ==================================================
 * Registering all required & needed function or path
 * ==================================================
 */

  // load the models loader 
  app.set('models', models);

  // load the custom variable
  Object.keys(CONSTANT.VARIABLE).forEach(function(key) {
    var val = CONSTANT.VARIABLE[key];

    app.set(key, val);
  });

  // autoload the app folder
  consign({cwd: 'app'})
    .include('controllers')
    .then('routes')
    .into(app);

/**
 * ==================================================
 *           Handling the server and linking
 * ==================================================
 */

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

/**
 * ==================================================
 *                      Up & go
 * ==================================================
 */

module.exports = app;
