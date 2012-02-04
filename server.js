var app = require('express').createServer()
  , io = require('socket.io').listen(app);
  
var port = process.env.PORT || 8001;

app.listen(port);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection', function (socket) {
    // echo the message
    socket.on('message', function (data) {
        console.info(data);
        socket.send("[ECHO] "+data);
    });
});