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

    save(callback) {
        let connection = mysql.createConnection({
            socketPath: '/cloudsql/pling-258309:europe-west1:pling-database',
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