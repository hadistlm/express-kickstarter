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

  let fs        = MODULES.filesystem;
  let path      = MODULES.path;
  let Sequelize = MODULES.sequelize;
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

  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
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
      const model = sequelize['import'](path.join(__dirname, file));
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

  console.log('All models are loaded...');

module.exports = db;
