const mysql = require('mysql');

module.exports = class User {
    constructor(registrationData) {
        Object.keys(registrationData).forEach(key => {
            this[key] = registrationData[key];
        });
    }

    save(callback) {
        let connection = mysql.createConnection({
            host: '34.77.245.225',
            user: 'root',
            password: 'pling',
            database: 'pling_storage',
        });

        connection.query('INSERT INTO users SET ?', this, (err, res, fields) => {
            if (err) callback(err, null);
            else {
                this.userid = res.insertId;
                callback(null, this.toJSON());
            }
        });
    }

    exists(callback) {
        let connection = mysql.createConnection({
            host: '34.77.245.225',
            user: 'root',
            password: 'pling',
            database: 'pling_storage',
        });

        connection.query('SELECT * FROM users WHERE username = ?', this.username, (err, res, fields) => {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                callback(null, res[0]);
            }
        });
    }

    toJSON() {
        let clone = (({
            password,
            ...others
        }) => ({
            ...others
        }))(this);

        return JSON.stringify(clone);
    }
}