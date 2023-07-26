const express = require('express');
const router = express.Router();
const { getHomepage, getLife, getMy, postNewUser, getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/homeController')

//router.method('/route', handler)
router.get('/', getHomepage)
router.get('/life', getLife)
router.get('/my', getMy)
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)
router.post('/create-user', postNewUser)
router.post('/update-user', postUpdateUser)


module.exports = router