// Import packages
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const chalk = require('chalk');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const config = require('./config');

// Express App
const app = express();

// Database
require('./utils/database');

// Passport
require('./utils/passport');

// Settings
app.set('PORT', 8080);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'components'),
  defaultLayout: 'main',
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
      store: MongoStore.create({mongoUrl: config.MONGODB_URI}),
    }),
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/student.routes'));
app.use('/', require('./routes/app.routes'));
app.use('/', require('./routes/user.routes'));

// Running app
app.listen(app.get('PORT'), () => {
  console.log(
      chalk.blue.bold('Server on port:'),
      chalk.bold(app.get('PORT')),
  );
});
