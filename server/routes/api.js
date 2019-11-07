const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Event = require('../models/event');

router.get('/', (req, res) => {
    res.send("From api-route");
});

/**   / /\   |--\ |   / |--\ 
 *   / /--\  |--/ |  /  |--/
 *  / /    \ |    | /   |  \ 
 */
router.post('/register', (req, res) => {
    // TODO: Sanitize user-input, check password containing correct values etc(normal password rules)
    // TODO: Check error-messages returned from INSERT, show "username already" etc.
    let userData = req.body;
    let user = new User(userData);
    user.save((err, registeredUser) => {
        if (err) console.log(err);
        else res.status(200).send(registeredUser);
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
                res.status(200).send(user);
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



module.exports = router;