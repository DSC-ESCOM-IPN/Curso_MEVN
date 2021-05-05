const mongoose = require("mongoose");
const chalk = require("chalk");

const DB_USER = process.env.DB_USER || "node-app"
const DB_HOST = process.env.DB_HOST || "localhost"
const DB_PORT = process.env.DB_PORT || 27017
const DB_NAME = process.env.DB_NAME || "mydb"
const DB_PASS = process.env.DB_PASS || "secret"

mongoose
	.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		console.log(chalk.blue.bold("Database:"), chalk.green.bold("Connected"))
	)
	.catch((e) =>
		console.log(chalk.blue.bold("Database:"), chalk.red.bold("Error\n"), e)
	);

module.exports = mongoose;
