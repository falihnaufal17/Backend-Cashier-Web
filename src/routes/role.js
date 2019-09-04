const express = require('express')
const Routes = express.Router()
const auth = require('../helpers/auth')
const roleController = require('../controllers/role')

Routes
    .all('/*', auth.authInfo)
    .get('/', roleController.getAllRole)
    .post('/', roleController.addRole)
    .delete('/:id_role', roleController.deleteRole)
    .patch('/:id_role', roleController.updateRole)

module.exports = Routes