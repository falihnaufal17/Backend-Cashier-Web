const express = require('express')
const Routes = express.Router()
const auth = require('../helpers/auth')
const categoryController = require('../controllers/category')

Routes
    .all('/*', auth.authInfo)
    .get('/', categoryController.getAllCategory)
    .post('/', categoryController.addCategory)
    .delete('/:id_category', categoryController.deleteCategory)
    .patch('/:id_category', categoryController.updateCategory)

module.exports = Routes