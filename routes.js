module.exports = function(app, utils) {
	app.get('/bars', function(req, res) {
		res.sendfile('responses/bars.json');
	});

	app.get('/bars/:bar', function(req, res) {
		var bar = utils.getBar(req, res);
		if ( !utils.isBar(bar) ){
			res.send('{"status":"error", "message": ' + req.params.bar + '" was not found.  Please try again."}');
		} else {
			res.sendfile('responses/' + bar + '.json');
		}
	});
};