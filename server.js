var app = require('express')();
var serveStatic = require('serve-static')
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(serveStatic(__dirname, {index: ['index.html']}));

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    
