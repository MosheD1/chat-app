import { Server } from "socket.io";
import express from "express";
import { createServer } from 'node:http';
const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile("C:\\Users\\user\\Documents\\github\\chat-app\\index.html");
});

io.on('connection', (socket) => {
    console.log('socket is on')
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
});

server.listen(3000, () => {
    console.log('server is running');
})