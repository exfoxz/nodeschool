// Transform JS

var through = require('through');
var split = require('split');

var tr = through(write, end);
var counter = 1;

//console.log("HERE");
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

function write(buf) {
console.log(buf);
	if((counter++ %  2) == 0){ // even {

	console.log(buf.toString().toUpperCase());	
	}
	else {// odd {
	console.log(this.queque(buf.toString().toLowerCase()));
	}
}

function end() {
	//console.log('__END__');
}
