const express = require('express');
const router = express.Router();
const { getHomepage, getLife, getMy } = require('../controllers/homeController')

//router.method('/route', handler)
router.get('/', getHomepage)
router.get('/life', getLife)
router.get('/my', getMy)

module.exports = router