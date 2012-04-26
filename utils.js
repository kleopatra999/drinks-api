module.exports = {
	bars : [
		'blueline', 'ciieast', 'chasers', 'daddios', 'drifters',
		'elroys', 'fatjacks', 'firehouse', 'illinoisbrewingco', 'killarneys', 
		'maggiemileys', 'maguires', 'mulligans', 'pubii', 'sixstrings', 'theloft'
	],
	isBar : function(bar){
		var found = false,
			len = this.bars.length;
			
		while(len--){
			if ( this.bars[len].match(bar) ){
				found = true;
				break;
			}
		}
		return found;
	},
	getBar : function(req, res){
		var bar = req.params.bar;
		bar = bar.replace(/\s/g, "").toLowerCase();
		return bar;
	}
};