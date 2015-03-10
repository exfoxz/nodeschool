var spawn = require('child_process').spawn;
var duplexer = require('duplexer');


module.exports = function(cmd, args) {
	console.log(cmd, args);
	var c = spawn(cmd, args);
	// console.log(c)
	
	c.on('close', function(mes){
		// console.log('Closed', mes);
	})

	c.stderr.on('error', function (err) {
	  console.log('stdout err: ' + err);
	});

	
	// console.log(c.stdin);
	// console.log("================================")
	// console.log(c.stdout);
	return  duplexer(c.stdin, c.stdout);
}