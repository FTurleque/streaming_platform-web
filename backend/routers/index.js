const express = require('express')
const homeController = require('../controllers/homeController')

const router = express.Router()

router.get('/home', homeController.home)
router.get('/about', homeController.about)

module.exports = router