const miscHelper = require('../helpers/helper')
// const transactionModel = require('../models/transaction')
// const SGmail = require('@sendgrid/mail')

SGmail.setApiKey('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')
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
            id_transaction: req.body.id_transaction,
            id_user: req.body.id_user,
            total: req.body.total,
            created_at: new Date,
            updated_at: new Date
        }
        transactionModel.addTransaction(data)
            .then(() => {
                // const msg = {
                //     to: 'falihnaufal1700@gmail.com',
                //     from: 'falfal@cashier.com',
                //     subject: 'Nota transaksi',
                //     text: 'Pelanggan Yth. ',
                //     html: '<strong>Some text for email bangsatttt</strong>',
                // };
                // SGmail.send(msg).then(result => {
                //     miscHelper.response(res, data, 200);
                // })
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
}