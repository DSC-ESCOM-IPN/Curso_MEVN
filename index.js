// Import packages
const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const mongo = require('./database');

mongo.connectToServer(function (err, client) {
    if (err) console.log(err);
    // Express App
    const app = express();

    // Settings
    app.set("PORT", 8080);

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
});
