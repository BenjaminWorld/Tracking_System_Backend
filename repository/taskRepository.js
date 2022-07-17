const con = require('../utils/dbConnection');

const selectAll = () => {

    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM bhg0jdjtgjzuemqpnwbz.task ORDER BY priority DESC', async function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

const selectByName = (name) => {

    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM bhg0jdjtgjzuemqpnwbz.task WHERE by_who = ? ORDER BY priority DESC', name, async function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

module.exports = {selectAll: selectAll, selectByName: selectByName};


