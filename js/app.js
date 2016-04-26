var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var HOST = '192.168.2.7';

http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('http socket connected');
});
