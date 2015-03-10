var zlib = require('zlib');
var crypto = require('crypto');
var tar = require('tar');
var concat = require('concat-stream');

var parser = tar.Parse();
var de = crypto.createDecipher(process.argv[2], process.argv[3]);
var gu = zlib.createGunzip();

gu.on('error', function(err){
	console.log(err);
});

de.on('error', function(err){
	console.log(err);
})

parser.on('error', function(err){
	console.log(err);
})


parser.on('entry', function(e){
	// console.log('ENTRY');
	if(e.type === "File") {
		var cr = crypto.createHash('md5', {encoding: 'hex'});
		cr.on('error', function(err){
			console.log("cr error:", err);
		})
		e.pipe(cr).pipe(concat(function(body){
			console.log(body.toString() + ' ' + e.path);
		}));
	}
});

process.stdin.pipe(de).pipe(gu).pipe(parser);
