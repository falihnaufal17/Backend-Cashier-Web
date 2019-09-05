require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const cors = require('cors')

const port = process.env.PORT || 1700;

const roleRoutes = require('./src/routes/role')
const userRoutes = require('./src/routes/user')
const categoryRoutes = require('./src/routes/category')
const menuRoutes = require('./src/routes/menu')
const transactionRoutes = require('./src/routes/transaction')

app.listen(port, () => {
    console.log(`Server started with port: ${port}`)
});

// app.use(cors())
app.use(xssFilter())
app.use(logger('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/roles', roleRoutes)
app.use('/users', userRoutes)
app.use('/categories', categoryRoutes)
app.use('/menus', menuRoutes)
app.use('/transactions', transactionRoutes)