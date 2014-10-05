var fs = require('fs');

fs.readFile('/usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html',
	function (err,data) {
		if (err) throw err;
		// console.log(data.toString());
		var lines = data.toString().split('\n');
		console.log(lines.length);
});
