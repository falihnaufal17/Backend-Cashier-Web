require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const path = require('path')

const port = process.env.PORT || 1700;

app.listen(port, () => {
    console.log(`Server started with port: ${port}`)
});

app.use(xssFilter())
app.use(logger('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/uploads'))