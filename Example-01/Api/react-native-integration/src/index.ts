import "reflect-metadata";
import http from 'http';
import express from 'express';
import cors from 'cors';

import './typeorm/connection';
import routes from "./routes";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { 
    cors: { 
        origin: "*", 
        methods: ['GET', 'POST'] 
    } 
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api', routes);

io.on('connection', (socket) => {
    console.log(`Client connected ${socket.id}`);

    socket.on('message', data => {
        console.log(data);

        io.emit('message', data);
    });
});

io.on('chat message', (socket) => {
    console.log(socket);
});

server.listen(8081, () => console.log("Iniciado"));