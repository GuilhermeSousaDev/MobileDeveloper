import "reflect-metadata";
import express from 'express';
import cors from 'cors';

import './typeorm/connection';
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api', routes);

app.listen(8081, () => console.log("Iniciado"));