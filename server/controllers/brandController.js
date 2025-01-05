const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
	async create(req, res) {
		const { name } = req.body
		const brand = await Brand.create({ name })
		return res.json(brand)
	}

	async getAll(req, res) {
		const brands = await Brand.findAll()
		return res.json(brands)
	}

  async getOne(req, res) {
    const brand = await Type.findByPk(req.params.id)
    return res.json(brand)
  }

  async update(req, res) {
    const updatedBrand = await Type.update(req.body)
    return res.json(updatedBrand)
  }

  async delete(req, res) {
    const removedBrand = await Type.delete(req.params.id)
    return res.json(removedBrand)
  }
}

module.exports = new BrandController()
