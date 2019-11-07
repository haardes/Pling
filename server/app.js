const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();
const api = require('./routes/api');

app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.listen(PORT, () => {
    console.log('Server listening on port' + PORT);
});