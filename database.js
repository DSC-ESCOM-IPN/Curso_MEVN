const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
	.connect("mongodb://localhost:27017/TallerMongo", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		console.log(chalk.blue.bold("Database:"), chalk.green.bold("Connected"))
	)
	.catch((e) =>
		console.log(chalk.blue.bold("Database:"), chalk.red.bold("Error\n"), e)
	);

module.exports = mongoose;
