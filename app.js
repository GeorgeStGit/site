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

// ✅ Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Serve index.html correctly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ✅ Serve subpages correctly
app.get('/program', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'program.html'));
});

app.get('/gamedev', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gamedev.html'));
});

app.get('/dota', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dota.html'));
});

// ✅ Serve 404 page if file is not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// ✅ Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
