const miscHelper = require('../helpers/helper')
const menuModel = require('../models/menu')
const cloudinary = require('cloudinary')

module.exports = {
    getAllMenu: (req, res) => {
        menuModel.getAllMenu()
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    getMenuById: (req, res) => {
        const id_menu = req.params.id_menu
        menuModel.getMenuById(id_menu)
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    addMenu: async (req, res) => {
        let path = req.file.path
        console.log(path)
        let geturl = async (req) => {
            cloudinary.config({
                cloud_name: 'dnqtceffv',
                api_key: '796497613444653',
                api_secret: 'We2TAGrwko6E8C4t3Uemrm9kbeA'
            })

            let data
            await cloudinary.uploader.upload(path, (result) => {
                const fs = require('fs')
                fs.unlinkSync(path)
                data = result.url
            })

            return data
        }
        let filename = 'images/' + req.file.filename
        console.log("FILENYA: ", filename)
        let data = {
            name: req.body.name,
            image: await geturl(),
            price: req.body.price,
            id_category: req.body.id_category,
            id_user: req.body.id_user,
            created_at: new Date,
            updated_at: new Date
        }
        menuModel.addMenu(data)
            .then(() => {
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    deleteMenu: (req, res) => {
        const id_menu = req.params.id_menu
        menuModel.deleteMenu(id_menu)
            .then((resultData) => {
                const result = resultData
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    updateMenu: async (req, res) => {
        const id_menu = req.params.id_menu
        let path = req.file.path
        let geturl = async (req) => {
            cloudinary.config({
                cloud_name: 'dnqtceffv',
                api_key: '796497613444653',
                api_secret: 'We2TAGrwko6E8C4t3Uemrm9kbeA'
            })

            let data
            await cloudinary.uploader.upload(path, (result) => {
                const fs = require('fs')
                fs.unlinkSync(path)
                data = result.url
            })

            return data
        }
        let filename = 'uploads/images/' + req.file.filename
        console.log("FILENYA: ", filename)
        let data = {
            name: req.body.name,
            image: await geturl(),
            price: req.body.price,
            id_category: req.body.id_category,
            id_user: req.body.id_user,
            created_at: new Date,
            updated_at: new Date
        }
        menuModel.updateMenu(id_menu, data)
            .then(() => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
}