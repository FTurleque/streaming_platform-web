const express = require('express')
const homeController = require('../controllers/homeController')

const router = express.Router()

// Router home and about
router.get('/home', homeController.home)
router.get('/about', homeController.about)

// router media
router.get('/medias', mediaController.getAllMedias)

module.exports = router