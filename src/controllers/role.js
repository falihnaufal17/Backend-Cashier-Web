const miscHelper = require('../helpers/helper')
const roleModel = require('../models/role')

module.exports = {
    getAllRole: (req, res) => {
        roleModel.getAllRole()
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    addRole: (req, res) => {
        let data = {
            name: req.body.name,
            created_at: new Date,
            updated_at: new Date
        }
        roleModel.addRole(data)
            .then(() => {
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    deleteRole: (req, res) => {
        const id_role = req.params.id_role
        roleModel.deleteRole(id_role)
            .then((resultData) => {
                const result = resultData
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    updateRole: (req, res) => {
        const id_role = req.params.id_role
        let data = {
            name: req.body.name,
            updated_at: new Date
        }
        roleModel.updateRole(id_role, data)
            .then(() => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
}