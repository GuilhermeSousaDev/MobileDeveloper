import "reflect-metadata";
import http from 'http';
import express from 'express';
import cors from 'cors';

import './typeorm/connection';
import routes from "./routes";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

io.on('connection', (socket) => {
    console.log(`Client connected ${socket.id}`);
});

app.use('/api', routes);

server.listen(3000, () => console.log("Iniciado"));