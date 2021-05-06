// Import packages
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");

// Express App
const app = express();

// Database
require("./database");

// Settings
app.set("PORT", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", require("./routes/user.routes"));

// Running app
app.listen(app.get("PORT"), () => {
	console.log(
		chalk.blue.bold("Server on port:"),
		chalk.bold(app.get("PORT"))
	);
});
