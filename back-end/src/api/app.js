const express = require('express');
// https://www.youtube.com/watch?v=bk661C4WY6I
// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const cors = require('cors');

require('express-async-errors');
const userRoute = require('../routes/UsersRoute');
const loginRoute = require('../routes/LoginRoute');
const tokenRoute = require('../routes/TokenRoute');
const productsRoute = require('../routes/ProductsRoute');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use(loginRoute);
app.use(productsRoute);
app.use(tokenRoute);
app.use(userRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;
