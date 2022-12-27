//const express = require('express')
import express from 'express'
import {pool} from './db.js'
import employeesRouters from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";


const app = express()

app.use(express.json()) 

/* RUTAS END POINT*/
app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS RESULT')
    res.json(result[0])
})

app.use(indexRoutes)
app.use('/api', employeesRouters)

//app.get('/ping', (req, res) => res.send('pong'));



app.listen(3000)
console.log('server running on port 3000')