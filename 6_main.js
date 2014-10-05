var mymodule = require('./6_module.js');
var path = require('path');

var folder = process.argv[2];
var ext_filter = process.argv[3];
mymodule(process.argv[2], process.argv[3],
	function(err, data) {
	if (err) throw err;
	data.forEach(function(f) {
		console.log(f);
	});
});
