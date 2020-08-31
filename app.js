require('dotenv').config()
require('./config/mongoose')
require('./config/expireTickets');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

var {error} = require('./app/utils/error_handler');
var {response} = require('./app/utils/response_handler');

var showRouter = require('./app/routes/show');
var ticketRouter = require('./app/routes/tickets');
var usersRouter = require('./app/routes/users');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send(response(200,'Welcome to PVR Ticketing portal!'))
})

app.use('/shows', showRouter);
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
