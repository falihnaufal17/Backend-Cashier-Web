const miscHelper = require('../helpers/helper')
const userModel = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
    getAllUser: (req, res) => {
        userModel.getAllUser()
            .then((resultData) => {
                const result = resultData
                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, error, 400, 'error')
            })
    },
    getUserById: (req, res) => {
        const id_user = req.params.id_user
        userModel.getUserById(id_user)
            .then((resultData) => {
                const result = resultData[0]
                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, error, 400, 'error')
            })
    },
    register: (req, res) => {
        const salt = miscHelper.generateSalt(18)
        const passwordHash = miscHelper.setPassword(req.body.password, salt)
        const data = {
            nama: req.body.nama,
            email: req.body.email,
            password: passwordHash.passwordHash,
            salt: passwordHash.salt,
            token: '',
            id_role: req.body.id_role,
            created_at: new Date,
            updated_at: new Date
        }
        userModel.register(data)
            .then(() => {
                miscHelper.response(res, data)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, error, 400, 'error')
            })
    },
    login: (req, res) => {
        const email = req.body.email
        const password = req.body.password
        userModel.getByEmail(email)
            .then((result) => {
                const dataUser = result[0]
                const usePassword = miscHelper.setPassword(password, dataUser.salt).passwordHash

                if (usePassword === dataUser.password) {
                    dataUser.token = jwt.sign({
                        id_user: dataUser.id_user,
                        nama: dataUser.nama,
                        email: dataUser.email,
                        role: dataUser.name
                    }, process.env.SECRET_KEY, { expiresIn: '60m' })
                    const token = dataUser.token
                    delete dataUser.salt
                    delete dataUser.password

                    userModel.updateToken(email, token)
                        .then((resultToken) => {
                            return miscHelper.response(res, resultToken, 200)
                        })
                        .catch((error) => {
                            console.log(error)
                        })

                    return miscHelper.response(res, dataUser, 200)
                } else {
                    return miscHelper.response(res, null, 403, 'Wrong Password!')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}