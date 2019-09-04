const express = require('express')
const Routes = express.Router()
const auth = require('../helpers/auth')
const userController = require('../controllers/user')

Routes
    .all('/*', auth.authInfo)
    .get('/', auth.accessToken, userController.getAllUser)
    .get('/:id_user', auth.accessToken, userController.getUserById)
    .post('/register', userController.register)
    .post('/login', userController.login)

module.exports = Routes