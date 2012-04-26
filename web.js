var express = require('express'),
	app = express.createServer(express.logger()),
	TwilioClient = require('twilio').Client,
    Twiml = require('twilio').Twiml,
    sys = require('sys'),
    client = new TwilioClient('AC21f5aca29fd25bae8b07f574137b2bb2', '55171e365fe52c33c1650f89b9a7a3cf', 'morning-samurai-2056.herokuapp.com');

var bars = ['blueline', 'ciieast', 'chasers', 'daddios', 'drifters',
			'elroys', 'fatjacks', 'firehouse', 'illinoisbrewingco', 'killarneys', 
			'maggiemileys', 'maguires', 'mulligans', 'pubii', 'sixstrings', 'theloft'];

app.get('/bars', function(req, res) {
	res.sendfile('responses/bars.json');
});

app.get('/bars/:bar', function(req, res) {
	var bar = getBar(req, res);
	console.log('bar parsed to: ' + bar );
	if ( !isBar(bar) ){
		console.log('bar not found');
		res.send('{"status":"error", "message": ' + req.params.bar + '" was not found.  Please try again."}');
	} else {
		console.log('bar found');
		res.sendfile('responses/' + bar + '.json');
	}
});

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

phone.on('incomingSms', function(reqParams, res) {
	console.log('Received incoming SMS with text: ' + reqParams.Body);
	console.log('From: ' + reqParams.From);
	res.send('hey');
});

// Start Server and listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
  console.log("Twilio is ready at: 415-599-2671");
});
