const express = require('express')
const app = express()
const port = 55;
const database = require('./db/database')
const bodyParser = require('body-parser');
const router = require('./router');


database
    .connect()
    .then(() => console.log('Database connected.'))
    .catch((error) => console.error('Database error: ', error))

app.use(bodyParser.json());
app.use(router);


app.listen(
    port,
    console.log(`http://localhost:${port}`)
);