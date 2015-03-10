var crypto = require('crypto');
var through = require('through');
// console.log("KEY:", process.argv[2]);
var stream = crypto.createDecipher('aes256', process.argv[2]);
// stream.pipe(process.stdout);

process.stdin.pipe(through(function(buf){
	// console.log("BEFORE", buf.toString());
	this.queue(buf);
})).pipe(stream).pipe(process.stdout);