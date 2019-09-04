const conn = require('../configs/db')

module.exports = {
    getAllTransaction: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT transaction.id_transaction, menu.name AS name_menu, user.nama AS name_user, transaction.total, transaction.created_at, transaction.updated_at FROM transaction INNER JOIN menu ON transaction.id_menu = menu.id_menu INNER JOIN user ON transaction.id_user = user.id_user ORDER BY transaction.created_at DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getTransactionByDay: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT transaction.id_transaction, menu.name AS name_menu, user.nama AS name_user, transaction.total, transaction.created_at, transaction.updated_at FROM transaction INNER JOIN menu ON transaction.id_menu = menu.id_menu INNER JOIN user ON transaction.id_user = user.id_user ORDER BY DATE(transaction.created_at) DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getTransactionByWeek: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT transaction.id_transaction, menu.name AS name_menu, user.nama AS name_user, transaction.total, transaction.created_at, transaction.updated_at FROM transaction INNER JOIN menu ON transaction.id_menu = menu.id_menu INNER JOIN user ON transaction.id_user = user.id_user ORDER BY WEEK(transaction.created_at) DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getTransactionByMonth: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT transaction.id_transaction, menu.name AS name_menu, user.nama AS name_user, transaction.total, transaction.created_at, transaction.updated_at FROM transaction INNER JOIN menu ON transaction.id_menu = menu.id_menu INNER JOIN user ON transaction.id_user = user.id_user ORDER BY MONTH(transaction.created_at) DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getTransactionByYear: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT transaction.id_transaction, menu.name AS name_menu, user.nama AS name_user, transaction.total, transaction.created_at, transaction.updated_at FROM transaction INNER JOIN menu ON transaction.id_menu = menu.id_menu INNER JOIN user ON transaction.id_user = user.id_user ORDER BY YEAR(transaction.created_at) DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addTransaction: (data) => {
        return new Promise((resolve, reject) => {
            console.log('datanya ', data)
            conn.query(`INSERT INTO transaction SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}