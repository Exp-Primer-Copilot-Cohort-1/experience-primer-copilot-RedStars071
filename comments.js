// Create web server 

// Import express module
var express = require('express');
var app = express();

// Import body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import mongoose module
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/commits');

// Import commit model
var Commit = require('./models/commit');

// Import router
var router = require('./routes/router');

// Register router
app.use('/', router);

// Start web server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});