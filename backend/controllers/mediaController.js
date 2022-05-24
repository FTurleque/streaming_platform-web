const mediaRepository = require('../db/mediaRepository')

module.exports = {
    async getAllMedias(req, res) {
        try {
            let result = await mediaRepository.getAll()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).end()
        }
    },
    async getOneMedia(req, res) {
        try {
            let result = await mediaRepository.findById(req.params.media_id)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).end()
        }
    }
}