const express = require('express');
const routerAPI = express.Router();
const { getUsers, postNewUsers, putUpdateUsers, deleteUsers } = require('../controllers/apiController')

//router.method('/route', handler)
routerAPI.get('/', (req, res) => {
    res.send("Hello world!");
})

routerAPI.get('/users', getUsers)
routerAPI.post('/users', postNewUsers)
routerAPI.put('/users', putUpdateUsers)
routerAPI.delete('/users', deleteUsers)



module.exports = routerAPI