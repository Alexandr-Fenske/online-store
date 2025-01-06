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
		const { id, name } = req.body

		const [, [updatedType]] = await Type.update(
			{ name },
			{
				where: { id },
				returning: true,
			}
		)
		return res.json(updatedType)
	}

	async delete(req, res) {
		const removedType = await Type.findByPk(req.params.id)
		await removedType.destroy()
		return res.json(removedType)
	}
}

module.exports = new TypeController()
