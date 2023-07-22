require('dotenv').config()
const express = require('express')//commonjs
const path = require('path')//commonjs
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')

//import express from 'express'//es modules

const app = express()//app express
const port = process.env.PORT || 8888//define port
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

//define routes
app.use('/', webRouter)

//run server
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})