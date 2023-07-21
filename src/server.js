const express = require('express')//commonjs
const path = require('path')//commonjs
require('dotenv').config()

// import express from 'express'//es modules

const app = express()//app express
const port = process.env.PORT || 8888//define port
const hostname = process.env.HOST_NAME

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//define routes
app.get('/', (req, res) => {
    res.send('Hello World!@')
})
app.get('/life', (req, res) => {
    res.send('My life is beautiful!')
})
app.get('/my', (req, res) => {
    res.render('sample.ejs')
})

//run server
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})