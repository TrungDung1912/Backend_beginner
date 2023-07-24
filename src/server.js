require('dotenv').config()
const express = require('express')//commonjs
const path = require('path')//commonjs
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')

//import express from 'express'//es modules

const app = express()//app express
const port = process.env.PORT || 8888//define port
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

//define routes
app.use('/', webRouter)

//test connection

// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>>results", results); // results contains rows returned by server
        console.log(">>>fields", fields); // fields contains extra meta data about results, if available
    }
);


//run server
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})