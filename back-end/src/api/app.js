const express = require('express');
const path = require('path');
// https://www.youtube.com/watch?v=bk661C4WY6I
// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const cors = require('cors');

require('express-async-errors');
const userRoute = require('../routes/UsersRoute');
const loginRoute = require('../routes/LoginRoute');
const tokenRoute = require('../routes/TokenRoute');
const productsRoute = require('../routes/ProductsRoute');
const salesRoute = require('../routes/SalesRoute');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRoute);
app.use('/products', productsRoute);
app.use('/token', tokenRoute);
app.use('/sales', salesRoute);
app.use('/users', userRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/images', express.static(path.join(__dirname, '/images')));

app.use(errorHandler);

module.exports = app;
