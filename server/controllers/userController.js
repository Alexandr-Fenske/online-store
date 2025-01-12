const ApiError = require('../error/ApiError')
const { User, Basket } = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, roles) => {
	return jwt.sign({ id, email, roles }, process.env.SECRET_KEY, {
		expiresIn: '24h',
	})
}

class UserController {
	async registration(req, res, next) {
		const { email, password, roles } = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Неверный email или password'))
		}
		const candidate = await User.findOne({ where: { email } })
		if (candidate) {
			return next(
				ApiError.badRequest('Пользователь с таким email уже существует')
			)
		}
		const hashPassword = await bcrypt.hash(password, 5)
		const user = await User.create({ email, roles, password: hashPassword })
		const basket = await Basket.create({ userId: user.id })
		const token = generateJwt(user.id, user.email, user.roles)
		return res.json({ token })
	}

	async login(req, res, next) {
		const { email, password } = req.body
		const user = await User.findOne({ where: { email } })
		if (!user) {
			return next(ApiError.internal('Пользователь не найден'))
		}
		let comparePassword = bcrypt.compareSync(password, user.password)
		if (!comparePassword) {
			return next(ApiError.internal('Указан неверный пароль'))
		}
		const token = generateJwt(user.id, user.email, user.roles)
		return res.json({ token })
	}

	async check(req, res, next) {
		return res.json({ message: 'Good' })
	}

	async getAll(req, res) {
		const users = await User.findAll()
		return res.json(users)
	}

	async delete(req, res) {
		const removedUser = await User.findByPk(req.params.id)
		await removedUser.destroy()
		return res.json(removedUser)
	}
}

module.exports = new UserController()
