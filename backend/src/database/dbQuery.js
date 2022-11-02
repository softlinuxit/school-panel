const pool = require('./pool');

function dbQuery(quertText, params) {
    return new Promise((resolve, reject) => {
        pool.query(quertText, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
module.exports = { dbQuery };