// Setup Server & Express
var express = require('express'),
	fs = require('fs'),
	app = express.createServer(express.logger());

// Load Utils
var utils = require('./utils');

// Load Bars
var bars = JSON.parse(fs.readFileSync('./bars.json'));

// Setup Routes
require('./routes')(app, utils, bars);

// Make a demo for desktop notifications
// Make a demo with WebRTC
// Make a demo w/ device orientation (http://slides.html5rocks.com/#slide-orientation)
// Make a demo w/ speech input (mobile?)
// Make a demo w/ battery status
// Make a demo on network info (megabytes, etc.)

// Start Server and listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
