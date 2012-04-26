var express = require('express'),
	app = express.createServer(express.logger());
	
// Setup Routes
require('./routes')(app);

var bars = ['blueline', 'ciieast', 'chasers', 'daddios', 'drifters',
			'elroys', 'fatjacks', 'firehouse', 'illinoisbrewingco', 'killarneys', 
			'maggiemileys', 'maguires', 'mulligans', 'pubii', 'sixstrings', 'theloft'];

function isBar(bar){
	var found = false,
		len = bars.length;
		
	while(len--){
		console.log( 'bars[len]: ' + bars[len] + ' bars[len].match(bar): ' + bars[len].match(bar) );
		if ( bars[len].match(bar) ){
			found = true;
			break;
		}
	}
	return found;
}

function getBar(req, res){
	var bar = req.params.bar;
	bar = bar.replace(/\s/g, "");
	bar = bar.toLowerCase();
	return bar;
}

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
