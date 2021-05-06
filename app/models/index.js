/**
 *
 * Main File to handle the database connections
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

  // load main modules
  let fs        = MODULES.filesystem;
  let path      = MODULES.path;
  let { Sequelize, DataTypes } = MODULES.sequelize;

  // load path & required files
  let basename  = path.basename(__filename);
  let env       = process.env.NODE_ENV || 'development';
  let config    = require(__basedir + '/config/config.json')[env];
  let db        = {};

/**
 * ==================================================
 *              Initialize Sequelize
 * ==================================================
 */

  let sequelize;

  // get database information based on ENV data
  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

  // rechecking database connection
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

/**
 * ==================================================
 *            Load all the models file
 * ==================================================
 */

  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.join(__dirname, file))(sequelize, DataTypes)
      db[model.name] = model;
    });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
    console.log('Initialize Model: '+modelName);
  });

/**
 * ==================================================
 *        Handling final data and then run it
 * ==================================================
 */

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  // logging : false | console.log
  // Ref : https://sequelize.org/master/manual/getting-started.html#logging
  const sequelizeOptions = { logging: false, force: false};

  // Removes all tables and recreates them (only available if env is not in production)
  if (CONSTANT.VARIABLE.DB_FORCE_RESTART === true && process.env.ENV !== 'production') {
    sequelizeOptions.force = true;
  }

  sequelize.sync(sequelizeOptions)
    .catch((err) => {
      console.log(err);
      process.exit();
    });

  console.log("All Tables loaded successfully")

module.exports = db;
