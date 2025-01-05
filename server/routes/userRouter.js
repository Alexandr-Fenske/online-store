const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

// router.get('/', userController.getAll)
// router.get('/:id', userController.getOne)
// router.update('/', userController.update)
// router.delete('/:id', userController.delete)

module.exports = router
