var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
process.stdin.pipe(tr);

var stream  = tr.select('.loud').createStream();

stream.pipe(through(function(buf){
	// console.log('YO');
	console.log((buf.toString().toUpperCase()));
})).pipe(stream);