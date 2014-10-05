var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir,function onDirectoryReady(err, files) {
		if (err) return callback(err);
		var file_array = [];
		files.forEach(function(f) {
			if(path.extname(f) == '.' + ext) {
				file_array.push(f);
			}
		});
		callback(null, file_array);
	});
};
