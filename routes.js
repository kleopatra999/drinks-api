module.exports = function(app, utils) {
	app.get('/bars', function(req, res) {
		res.sendfile('responses/bars.json');
	});

	app.get('/bars/:bar', function(req, res) {
		var bar = utils.getBar(req, res);
		console.log('bar parsed to: ' + bar );
		if ( !utils.isBar(bar) ){
			console.log('bar not found');
			res.send('{"status":"error", "message": ' + req.params.bar + '" was not found.  Please try again."}');
		} else {
			console.log('bar found');
			res.sendfile('responses/' + bar + '.json');
		}
	});
};