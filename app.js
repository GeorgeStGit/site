var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the "public" folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve index.html from the root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/program', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'program.html'));
});

app.get('/gamedev', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gamedev.html'));
});

app.get('/dota', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dota.html'));
});

// Default 404 route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
