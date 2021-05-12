var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const http = require('http').Server(app);
const io = require('socket.io')(http);

let history = [];
let interval;
let userConnected = 0;

const getApiAndEmit = socket => {
  io.sockets.emit('updateHistory', history);
};

io.on('connection', socket => {
  console.log('New client connected');
  userConnected += 1;
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
    userConnected -= 1;
    if (userConnected == 0) history = [];
    clearInterval(interval);
  });
});

var server = app.listen(process.env.PORT || 5000, function () {
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
io.listen(server);

module.exports = app;
