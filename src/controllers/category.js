const miscHelper = require('../helpers/helper')
const categoryModel = require('../models/category')

module.exports = {
    getAllCategory: (req, res) => {
        categoryModel.getAllCategory()
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    addCategory: (req, res) => {
        let data = {
            name: req.body.name,
            created_at: new Date,
            updated_at: new Date
        }
        categoryModel.addCategory(data)
            .then(() => {
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    deleteCategory: (req, res) => {
        const id_category = req.params.id_category
        categoryModel.deleteCategory(id_category)
            .then((resultData) => {
                const result = resultData
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    updateCategory: (req, res) => {
        const id_category = req.params.id_category
        let data = {
            name: req.body.name,
            updated_at: new Date
        }
        categoryModel.updateCategory(id_category, data)
            .then(() => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
}