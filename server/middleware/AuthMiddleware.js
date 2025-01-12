const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	if (req.method === 'OPTIONS') {
		return next()
	}
	try {
		const token = req.headers.аuthorization.split(' ')[1] //Bearer fsdfsjnsnaafw
		if (!token) {
			return res.status(401).json({ message: 'Не авторизован' })
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
		req.user = decoded
		next()
	} catch (error) {
		res.status(401).json({ message: 'Не авторизован' })
	}
}
