const conn = require('../configs/db')

module.exports = {
    getAllRole: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM role`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    addRole: (data) => {
        return new Promise((resolve, reject) => {
            console.log('datanya ', data)
            conn.query(`INSERT INTO role SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteRole: (id_role) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM role WHERE id_role = ?`, id_role, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateRole: (id_role, data) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE role SET ? WHERE id_role = ?`, [data, id_role], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}