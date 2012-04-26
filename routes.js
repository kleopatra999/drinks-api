module.exports = function(app) {
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
};