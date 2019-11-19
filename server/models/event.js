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
                connection.query('INSERT INTO junction_users_events SET ?', {
                    userid: this.userid,
                    eventid: res.insertId
                }, (err, res, fields) => {
                    if (err) callback(err, null);
                    else {
                        callback(null, JSON.stringify(this));
                    }
                });
            }
        });
    }

    // TODO:
    // toJSON() {}
}