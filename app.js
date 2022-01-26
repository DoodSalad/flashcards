const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

// This configures pug as the view engine allowing us to use .pug files to create out HTML.
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
  console.log('Hello :)');
  next();
});

app.use((req, res, next) => {
  console.log('World!');
  next();
});

app.use((req, res, next) => {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

//This tells the app which localhost port to listen on.
app.listen(3000, () => {
  console.log('The application is running on localhost:3000 :)')
});