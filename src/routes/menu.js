const express = require('express')
const Route = express.Router()
const multer = require('multer')
const path = require('path')

const menuController = require('../controllers/menu')
const auth = require('../helpers/auth')

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/images/')
    },

    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })

Route
    // .all('/*d', auth.authInfo)
    .get('/', menuController.getAllMenu)
    .get('/id_menu', menuController.getMenuById)
    .post('/', upload.single('image'), menuController.addMenu)
    .delete('/:id_menu', menuController.deleteMenu)
    .patch('/:id_menu', upload.single('image'), menuController.updateMenu)

module.exports = Route