var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(8000, function(){
	console.log('listenening to requests on port 8000');
});

app.use(express.static('public'));

// var io = socket(server);

// io.on('connection', function(socket) {
// 	console.log('made socket connection');
// 	socket.on('disconnect', function(){
// 		console.log('lost socket connection');
// 	})
// });