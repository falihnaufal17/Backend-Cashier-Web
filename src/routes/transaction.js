const express = require('express')
const Routes = express.Router()
const auth = require('../helpers/auth')
const transactionController = require('../controllers/transaction')

Routes
    .all('/*', auth.authInfo)
    .get('/', transactionController.getAllTransaction)
    .get('/day', transactionController.getTransactionByDay)
    .get('/week', transactionController.getTransactionByWeek)
    .get('/month', transactionController.getTransactionByMonth)
    .get('/year', transactionController.getTransactionByYear)
    .post('/', transactionController.addTransaction)

module.exports = Routes