const express = require('express')
const homeController = require('../controllers/homeController')
const mediaController = require('../controllers/mediaController')


const router = express.Router()

// Router home and about
router.get('/home', homeController.home)
router.get('/about', homeController.about)

// Router media
router.get('/medias/edit/:id', mediaController.modify)
router.post('/medias/edit/:id', mediaController.modify_post)

router.get('/medias/delete/:id', mediaController.remove)
router.post('/medias/delete/:id', mediaController.remove_post)

router.get('/medias/add', mediaController.addMedia)
router.post('/medias/add', mediaController.addMedia_post)

router.get('/medias/:id', mediaController.getOneMedia)
router.get('/medias', mediaController.getAllMedias)

// Router movies

module.exports = router