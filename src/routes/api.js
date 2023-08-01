const express = require('express');
const routerAPI = express.Router();
const { getUsers, postNewUsers, putUpdateUsers, deleteUsers,
    postUploadSingleFile, postUploadMultipleFile } = require('../controllers/apiController')
const { postCreateCustomer } = require('../controllers/customerController')
//router.method('/route', handler)
routerAPI.get('/', (req, res) => {
    res.send("Hello world!");
})

routerAPI.get('/users', getUsers)

routerAPI.post('/users', postNewUsers)

routerAPI.put('/users', putUpdateUsers)

routerAPI.delete('/users', deleteUsers)

routerAPI.post('/file', postUploadSingleFile)

routerAPI.post('/files', postUploadMultipleFile)

routerAPI.post('/customers', postCreateCustomer)

module.exports = routerAPI