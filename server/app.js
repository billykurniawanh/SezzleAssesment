var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const http = require('http').Server(app);
const io = require('socket.io')(http);

history = [];
let interval;

const getApiAndEmit = socket => {
  io.sockets.emit('updateHistory', history);
};

io.on('connection', socket => {
  console.log('New client connected');
  socket.emit('updateHistory', history);

  socket.on('newExpression', expression => {
    history.push(expression);
    if (history.length > 10) history.splice(0, 1);
    getApiAndEmit(socket);
  });

  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

var server = app.listen(5000, function () {
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
io.listen(server);
