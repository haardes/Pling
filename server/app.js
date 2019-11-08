const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();
const api = require('./routes/api');

app.use(bodyParser.json());
app.use(cors);

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hello from the server');
    res.end();
});

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
});