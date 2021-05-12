const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('./config');

const app = express();

require('./utils/database');

app.use(session({
  secret: '6uYMOwBGAr3FUe0cCkqMiCzcRgLHPnoI',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({mongoUrl: config.MONGODB_URI}),
  cookie: {
    maxAge: 1000 * 24 * 60 * 60,
  },
}));

app.get('/', (req, res) => {
  if (req.session.viewCount) {
    req.session.viewCount = req.session.viewCount + 1;
  } else {
    req.session.viewCount = 1;
  }
  res.send(`<h1>You have visited this page
    ${req.session.viewCount} times.</h1>`);
});

app.listen(3000);
