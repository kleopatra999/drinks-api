// Setup Server & Express
var express = require('express'),
	app = express.createServer(express.logger());

// Load Utils
var utils = require('./utils');

// Setup Routes
require('./routes')(app, utils);

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
