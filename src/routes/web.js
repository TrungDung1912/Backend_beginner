const express = require('express');
const router = express.Router();
const { getHomepage, getLife, getMy, postNewUser } = require('../controllers/homeController')

//router.method('/route', handler)
router.get('/', getHomepage)
router.get('/life', getLife)
router.get('/my', getMy)
router.post('/create-user', postNewUser)

module.exports = router