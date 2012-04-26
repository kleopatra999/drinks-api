module.exports = function(app, utils, bars) {
	app.get('/bars', function(req, res) {
		res.send(JSON.stringify(bars));
	});

	app.get('/bars/:bar', function(req, res) {
		var bar = utils.getBar(req, res);
		if ( !utils.isBar(bar) ){
			res.send('{"status": "error", "message": ' + req.params.bar + '" was not found.  Please try again."}');
		} else {
			res.send(JSON.stringify(bars[bar]));
		}
	});
};