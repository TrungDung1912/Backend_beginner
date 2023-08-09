require('dotenv').config()
const express = require('express')//commonjs
const path = require('path')//commonjs
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')
const connection = require('./config/database')
const fileUpload = require('express-fileupload')
// const { MongoClient } = require('mongodb');

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
            //using mongoose
            await connection()

            //using mongodb driver
            // Connection URL
            // const url = process.env.DB_HOST_WITH_DRIVER;
            // const client = new MongoClient(url);

            // Database Name
            // const dbName = process.env.DB_NAME;
            // await client.connect();
            // console.log('Connected successfully to server');

            // const db = client.db(dbName);
            // const collection = db.collection('customers');

            // let a = await collection.findOne({ address: 'hanoi' })
            // console.log(a)

            app.listen(port, hostname, () => {
                console.log(`Backend app listening on port ${port}`)
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    })()

//run server
