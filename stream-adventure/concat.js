var concat = require('concat-stream');
var http = require('http');

process.stdin.pipe(concat(
	function(body){
		console.log(body.toString().split('').reverse().join(''));
	})
);
