const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const connectDB = require('./db');
const app = express();

connectDB();

app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res)=> res.status(200).json({success: true, message: 'Welcome to iCash backend'}));
app.use('/api/transaction', require('./routes/transaction_routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
