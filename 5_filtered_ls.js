var fs = require('fs');
var path = require('path');
// console.log(process.argv);
// if (process.argv.length != 4) {
// 	console.log('para error');
// 	return;
// }
var folder = process.argv[2];
var ext_filter = '.' + process.argv[3];

fs.readdir(folder,
	function (err, files) {
		if (err) throw err;
		var count = 0;
		files.forEach(function(f) {
			var ext = path.extname(f);
			if(ext == ext_filter) {
				console.log(f);
				count ++;
			}
		});
		// console.log(count);
});
