var socket = require('websocket-stream');

var stream = socket('socket://localhost:8000');

stream.end('hello\n');