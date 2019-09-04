const miscHelper = require('../helpers/helper')
const transactionModel = require('../models/transaction')

module.exports = {
    getAllTransaction: (req, res) => {
        transactionModel.getAllTransaction()
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    getTransactionByDay: (req, res) => {
        transactionModel.getTransactionByDay()
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    getTransactionByWeek: (req, res) => {
        transactionModel.getTransactionByWeek()
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    getTransactionByMonth: (req, res) => {
        transactionModel.getTransactionByMonth()
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    getTransactionByYear: (req, res) => {
        transactionModel.getTransactionByWeek()
            .then((resultData) => {
                const result = resultData

                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    addTransaction: (req, res) => {
        let data = {
            id_menu: req.body.id_menu,
            id_user: req.body.id_user,
            total: req.body.total,
            created_at: new Date,
            updated_at: new Date
        }
        transactionModel.addTransaction(data)
            .then(() => {
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
}