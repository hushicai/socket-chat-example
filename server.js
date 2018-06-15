var app = require('express')();
var serveStatic = require('serve-static')
var http = require('http').Server(app);
var io = require('socket.io')(http);
var debug = require('debug')('socket.io-example');

app.use(serveStatic(__dirname, {index: ['index.html']}));

io.on('connection', function(socket){
    debug('a user connected');

    socket.on('disconnect', function(){
        debug('user disconnected');
    });

    socket.on('chat message', function(msg){
        debug('message: ' + msg);

        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    debug('listening on *:3000');
});

