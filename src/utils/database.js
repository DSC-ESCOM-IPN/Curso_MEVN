const mongoose = require('mongoose');
const chalk = require('chalk');
const config = require('../config');

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose
    .createConnection(config.MONGODB_URI, dbOptions)
    .then(() =>
      console.log(chalk.blue.bold('Database:'), chalk.green.bold('Connected')),
    )
    .catch((e) =>
      console.log(chalk.blue.bold('Database:'), chalk.red.bold('Error\n'), e),
    );

module.exports = db;
