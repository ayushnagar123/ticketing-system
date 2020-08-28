require('dotenv').config()
require('./config/mongoose')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var {error} = require('./app/utils/error_handler');
var {response} = require('./app/utils/response_handler');
var ticketRouter = require('./app/routes/ticket');
var usersRouter = require('./app/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send(response(200,'Welcome to PVR Ticketing portal!'))
})

app.use('/tickets', ticketRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send(error(404,'Route not found'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.send(error(500,"Internal Server Error"));
});

module.exports = app;
