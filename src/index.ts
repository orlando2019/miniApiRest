import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection } from 'typeorm';

import repuestoRoutes from './routes/repuesto.router';
import audiRepuestoRoutes from './routes/auditoriaRepuesto.router';
const PORT = 4000;

const app = express();
createConnection();

//Middllewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(repuestoRoutes, audiRepuestoRoutes);

app.listen(PORT);
console.log(`SERVER ON PORT ${PORT}`);
