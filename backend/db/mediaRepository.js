const db = require('../models/index')
const MediaDb = db.Media

module.exports = {
    /**
     * Get all medias
     * @returns Array of object
     */
    async getAll() {
        let medias = await MediaDb.findAll()
        return medias
    },
    /**
     * Get one media
     * @param {Number} id Id of the media
     * @returns An object
     */
    async getById(id) {
        const media = await MediaDb.findByPk(id)
        return media
    },
    /**
     * Create one media
     * @param {Object} model Body of the request for create object
     */
    async create(model) {
        const {  } = model
        await MediaDb.create({  })
    },
    /**
     * Update a media with the id
     * @param {Object} model Body of the object to modify
     */
    async update(model) {
        const { id } = model
        await MediaDb.update({}, {where: { id: id } })
    },
    /**
     * Delete a media with the id
     * @param {Number} id Id of the media
     */
    async delete(id) {
        const media = await MediaDb.getById(id)
        await media.destroy()
    }
}