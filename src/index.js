// Import packages
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require("morgan");
const chalk = require("chalk");
const methodOverride = require('method-override');

// Express App
const app = express();

// Database
require("./utils/database");

// Settings
app.set("PORT", 8080);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'components'),
	defaultLayout: 'main',
	extname: '.hbs',
}));
app.set('view engine', '.hbs');

// Routes
app.use("/", require("./routes/user.routes"));
app.use("/", require("./routes/app.routes"));

app.use(methodOverride('_method'));

// Running app
app.listen(app.get("PORT"), () => {
	console.log(
		chalk.blue.bold("Server on port:"),
		chalk.bold(app.get("PORT"))
	);
});
