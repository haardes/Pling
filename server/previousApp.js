const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const connection = mysql.createConnection({
    host: '35.228.70.30',
    user: 'root',
    password: 'pling',
    database: 'pling_storage'
});

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/public/login.html'));
});

app.get('/register', function (request, response) {
    response.sendFile(path.join(__dirname + '/public/register.html'));
});

app.post('/auth', function (request, response) {
    let username = request.body.username.toLowerCase();
    let password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.post('/register', function (request, response) {
    let username = request.body.username.toLowerCase();
    let password = request.body.password;
    let passwordRepeat = request.body.passwordRepeat;

    if (password === passwordRepeat && password !== "") {
        connection.query('SELECT * FROM users WHERE username = ?', [username], function (err, res, fields) {
            if (res.length > 0) {
                response.send("Username already exists");
                response.end();
            } else {
                connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function (err, res, fields) {
                    if (!err) {
                        request.session.loggedin = true;
                        request.session.username = username;
                        response.redirect('/home');
                    } else {
                        response.send("Error while registering user");
                    }

                    response.end();
                });
            }
        });
    } else {
        response.send('Please enter same password twice');
        response.end();
    }
});

app.get('/home', function (request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

app.listen(3000);