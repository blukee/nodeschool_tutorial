var fs = require('fs');

var buf = fs.readFileSync('/usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html');;
var str = buf.toString();
console.log(str);
var lines = str.split('\n');
console.log(lines.length);
