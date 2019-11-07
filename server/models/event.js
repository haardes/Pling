const mysql = require('mysql');

module.exports = class Event {
    constructor(eventData) {
        Object.keys(eventData).forEach(key => {
            this[key] = eventData[key];
        });

        if (typeof this.end === 'undefined') {
            this.end = this.start;
        }
    }

    // TODO:
    save(callback) {
        let connection = mysql.createConnection({
            host: '34.77.245.225',
            user: 'root',
            password: 'pling',
            database: 'pling_storage',
        });

        connection.query('INSERT INTO events SET ?', this, (err, res, fields) => {
            if (err) callback(err, null);
            else {
                this.eventid = res.insertId;
                callback(null, JSON.stringify(this));
            }
        });
    }

    // TODO:
    // toJSON() {}
}