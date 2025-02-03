var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public/')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));


app.get('/', (request, response) => {
  response.render('home')
  response.route
});

app.get('/program', (request, response) => {
  response.render('program')
  response.route
});

app.get('/gamedev', (request, response) => {
  response.render('gamedev')
  response.route
});

app.get('/dota', (request, response) => {
  response.render('dota')
  response.route
});

// default route
app.get('*', (request, response) => {
  response.status(404)
  response.render('404-not-found')
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
