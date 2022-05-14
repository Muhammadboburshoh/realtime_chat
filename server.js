const http = require('http');
const path = require('path');

const express = require('express');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  //connection
  socket.emit('message', 'Welcome to DevCommunity');

  //broadcast
  socket.broadcast.emit('message', 'A user has joined the chat');

  //disconnect
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });

  socket.on('chatMessage', msg => {
    io.emit('message', msg)
  })
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT);
