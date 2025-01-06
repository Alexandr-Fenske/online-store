const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class deviceController {
	async create(req, res) {
		try {
			const { name, price, brandId, typeId, info } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const device = await Device.create({
				name,
				price,
				brandId,
				typeId,
				img: fileName,
			})

			if (info) {
				info = JSON.parse(info)
        info.forEach(i => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          })
        });
			}

			return res.json(device)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

	async getAll(req, res) {
		let { brandId, typeId, limit, page } = req.query
		page = page || 1
		limit = limit || 9
		let offset = page * limit - limit
		let devices
		if (!brandId && !typeId) {
			devices = await Device.findAndCountAll({ limit, offset })
		}
		if (brandId && !typeId) {
			devices = await Device.findAndCountAll({
				where: { brandId },
				limit,
				offset,
			})
		}
		if (!brandId && typeId) {
			devices = await Device.findAndCountAll({
				where: { typeId },
				limit,
				offset,
			})
		}
		if (brandId && typeId) {
			devices = await Device.findAndCountAll({
				where: { typeId, brandId },
				limit,
				offset,
			})
		}

		return res.json(devices)
	}

	async getOne(req, res) {
		const { id } = req.params
		const device = await Device.findOne({
			where: { id },
			include: [{ model: DeviceInfo, as: 'info' }],
		})
		return res.json(device)
	}

	async update(req, res) {
		const { id, name, price, img } = req.body
		const [, [updatedDevice]] = await Device.update(
			{ name, price, img },
			{
				where: { id },
				returning: true,
			}
		)
		return res.json(updatedDevice)
	}

	async delete(req, res) {
		const removedDevice = await Device.findByPk(req.params.id)
		await removedDevice.destroy()
		return res.json(removedDevice)
	}
}

module.exports = new deviceController()
