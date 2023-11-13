import { Server } from "socket.io";
import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Chat app</h1>');
});

app.listen(3000, () => {
    console.log('server is running');
})