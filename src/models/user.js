const conn = require('../configs/db')

module.exports = {
    getAllUser: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT user.id_user, user.nama, user.email, user.password, user.salt, user.token, role.name, user.created_at, user.updated_at FROM user INNER JOIN role ON user.id_role = role.id_role`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getUserById: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT user.id_user, user.nama, user.email, user.password, user.salt, user.token, role.name, user.created_at, user.updated_at FROM user INNER JOIN role ON user.id_role = role.id_role WHERE id_user = ?`, id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    register: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO user SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT user.id_user, user.nama, user.email, user.password, user.salt, user.token, role.name, user.created_at, user.updated_at FROM user INNER JOIN role ON user.id_role = role.id_role WHERE email = ?', email, (err, result) => {
                if (!err) {
                    console.log(result)
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updateToken: (email, token) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE user SET token = ? WHERE email = ?', [token, email], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

}