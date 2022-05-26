const mediaRepository = require("../db/mediaRepository");

module.exports = {
  async getAllMedias(req, res) {
    try {
      let model = await mediaRepository.getAll();
      res.status(200).send(model);
    } catch (error) {
      res.status(500).end();
    }
  },
  async getOneMedia(req, res) {
    try {
      let model = await mediaRepository.findById(req.params.media_id);
      res.status(200).send(model);
    } catch (error) {
      res.status(500).end();
    }
  },
  async addMedia(req, res) {
    const model = req.body;
  },
  async addMedia_post(req, res) {
    try {
      const model = req.body;
      await mediaRepository.create(model);
      res.status(201).send('Create')
    } catch (error) {
      res.status(500).end();
    }
  },
  async modify(req, res) {
    const result = await mediaRepository.getById(req.params.media_id);
  },
  async modify_post(req, res) {
    const model = req.body;
    await mediaRepository.update(model);
  },
  async remove(req, res) {
    const result = await mediaRepository.getById(req.params.media_id);
  },
  async remove_post(req, res) {
    const id = req.params.media_id;
    await mediaRepository.delete(id);
  },
};
