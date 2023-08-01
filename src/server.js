require('dotenv').config()
const express = require('express')//commonjs
const path = require('path')//commonjs
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')
const connection = require('./config/database')
const fileUpload = require('express-fileupload')
//import express from 'express'//es modules

const app = express()//app express
const port = process.env.PORT || 8888//define port
const hostname = process.env.HOST_NAME

//config file up
app.use(fileUpload());

//config request.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app)

//define routes
app.use('/', webRouter)
app.use('/v1/api/', apiRouter)


    //test connection
    ; (async () => {
        try {
            await connection()
            app.listen(port, hostname, () => {
                console.log(`Backend app listening on port ${port}`)
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    })()

//run server
