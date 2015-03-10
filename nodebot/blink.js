var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
	console.log('Board is ready');
	var led = new five.Led(7);
	//led.fadeIn(500);
	led.strobe(getRandomInt(1000, 5000));	
})

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
