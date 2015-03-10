var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
	console.log('Board is ready');
	var servo = new five.Servo({pin:9});
	servo.sweep([0, 180]);
	//servo.cw(1);
	board.wait(3000, function(){
		console.log('after 3s');
		servo.stop();
		servo.center();
	})
})

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
