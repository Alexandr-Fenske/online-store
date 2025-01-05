const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
	async create(req, res) {
		const { name } = req.body
		const type = await Type.create({ name })
		return res.json(type)
	}

	async getAll(req, res) {
		const types = await Type.findAll()
		return res.json(types)
	}

  async getOne(req, res) {
    const type = await Type.findByPk(req.params.id)
    return res.json(type)
  }

  async update(req, res) {
    const updatedType = await Type.update(req.body)
    return res.json(updatedType)
  }

  async delete(req, res) {
    const removedPost = await Type.delete(req.params.id)
    return res.json(removedPost)
  }

}

module.exports = new TypeController()
