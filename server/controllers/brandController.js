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
    const brand = await Brand.findByPk(req.params.id)
    return res.json(brand)
  }

  async update(req, res) {
    const { id, name } = req.body

		const [, [updatedBrand]] = await Brand.update(
			{ name },
			{
				where: { id },
				returning: true,
			}
		)
    return res.json(updatedBrand)
  }

  async delete(req, res) {
    const removedBrand = await Brand.findByPk(req.params.id)
		await removedBrand.destroy()
		return res.json(removedBrand)
  }
}

module.exports = new BrandController()
