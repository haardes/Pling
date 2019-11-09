const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mysql = require('mysql');
const User = require('../models/user');
const Event = require('../models/event');
const connection = mysql.createConnection({
    socketPath: '/cloudsql/pling-258309:europe-west1:pling-database',
    user: 'root',
    password: 'pling',
    database: 'pling_storage',
});

router.get('/', (req, res) => {
    res.send("From api-route");
});

router.post('/register', (req, res) => {
    // TODO: Sanitize user-input, check password containing correct values etc(normal password rules)
    // TODO: Check error-messages returned from INSERT, show "username already" etc.
    let userData = req.body;
    let user = new User(userData);
    user.save((err, registeredUser) => {
        if (err) console.log(err);
        else {
            let payload = {
                subject: registeredUser.userid
            };
            let token = jwt.sign(payload, 'secretKey');

            res.status(200).send({
                token
            });
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.exists((err, user) => {
        if (err) console.log(err);
        else {
            if (!user) {
                res.status(401).send("Username not found");
            } else if (user.password !== userData.password) {
                res.status(401).send("Incorrect password");
            } else {
                let payload = {
                    subject: user.userid
                };
                let token = jwt.sign(payload, 'secretKey');

                res.status(200).send({
                    token
                });
            }
        }
    });
});

router.post('/events', (req, res) => {
    // TODO: Sanitize user-input
    let eventData = req.body;
    let event = new Event(eventData);
    event.save((err, event) => {
        if (err) console.log(err);
        else res.status(200).send(event);
    });
});

router.get('/events/:userid', (req, res) => {
    let userid = req.params.userid;
    connection.query('SELECT * FROM events WHERE userid = ?', userid, (error, results, fields) => {
        if (error) console.log(error);
        else res.status(200).send(results);
    });
});

module.exports = router;