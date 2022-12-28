//const express = require('express')
import express from 'express'
import {pool} from './db.js'
import employeesRouters from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

import { PORT } from "./config.js";

const app = express()

app.use(express.json()) 

/* RUTAS END POINT*/
app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS RESULT')
    res.json(result[0])
})

app.use(indexRoutes)
app.use('/api', employeesRouters)

app.use((req, res, next) => {
    res.status(404).json({ 
        message: 'endpoint not found'
    })
})

//app.get('/ping', (req, res) => res.send('pong'));

export default app;