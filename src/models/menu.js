const conn = require('../configs/db')

module.exports = {
    getAllMenu: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT menu.id_menu, menu.name, menu.image, menu.price, category.name AS name_category, user.nama AS name_user, menu.created_at, menu.updated_at FROM menu INNER JOIN category ON category.id_category = menu.id_category INNER JOIN user ON user.id_user = menu.id_user`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getMenuById: (id_menu) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT menu.id_menu, menu.name, menu.image, menu.price, category.name AS name_category, user.nama AS name_user, menu.created_at, menu.updated_at FROM menu INNER JOIN category ON category.id_category = menu.id_category INNER JOIN user ON user.id_user = menu.id_user WHERE menu.id_menu = ?`, id_menu, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addMenu: (data) => {
        return new Promise((resolve, reject) => {
            console.log('datanya: ', data)
            conn.query(`INSERT INTO menu SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteMenu: (id_menu) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM menu WHERE id_menu =  ?`, id_menu, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateMenu: (id_menu, data) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE menu SET ? WHERE id_menu =  ?`, [data, id_menu], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}