var express = require('express');
var path = require('path');
var app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Default route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Default 404 route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

module.exports = app;
