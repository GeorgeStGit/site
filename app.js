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

// Serve static files (CSS, JS, images, HTML) from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Default route serves index.html (no need to manually specify)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Since index.html is in root now
});

// Default 404 route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

module.exports = app;
