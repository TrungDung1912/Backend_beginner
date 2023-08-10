const express = require('express');
const routerAPI = express.Router();
const { getUsers, postNewUsers, putUpdateUsers, deleteUsers,
    postUploadSingleFile, postUploadMultipleFile } = require('../controllers/apiController')
const { postCreateCustomer, postCreateCustomers, getInfoCustomers,
    putUpdateCustomer, deleteACustomer, deleteCustomers } = require('../controllers/customerController')
const { postCreateProject, getProject, updateProject, deleteProject } = require('../controllers/projectController')
const { postCreateTask, getTask, updateTask, deleteTask } = require('../controllers/taskController')
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

routerAPI.post('/customers-many', postCreateCustomers)

routerAPI.get('/customers', getInfoCustomers)

routerAPI.put('/customer', putUpdateCustomer)

routerAPI.delete('/customer', deleteACustomer)

routerAPI.delete('/customers-many', deleteCustomers)

routerAPI.post('/projects', postCreateProject)

routerAPI.get('/projects', getProject)

routerAPI.put('/projects', updateProject)

routerAPI.delete('/projects', deleteProject)

routerAPI.post('/tasks', postCreateTask)

routerAPI.get('/tasks', getTask)

routerAPI.put('/tasks', updateTask)

routerAPI.delete('/tasks', deleteTask)

routerAPI.get('/info', (req, res) => {
    console.log(req.query)
    return res.status(200).json({
        data: req.query
    })
})

routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(req.params)
    return res.status(200).json({
        data: req.params
    })
})





module.exports = routerAPI