var http = require('http')

var url = process.argv[2]

http.get(url, function(response) {
	response.setEncoding('utf8')
	var count = 0
	var str = ''
	response.on('data', function(data) {
		// console.log(data)
		str += data;
	})
	response.on('error', function(error) {
		console.error(error)
	})
	response.on('end', function() {
		console.log(str.length)
		console.log(str)
	})
})
