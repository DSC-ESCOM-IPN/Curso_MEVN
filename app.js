const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  defaultLayout: 'main',
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

// routes
app.use(require('./routes/index'));
app.use('/student', require('./routes/students'));

app.use((req, res) => {
  res.status(404).send('Error');
});


module.exports = app;
