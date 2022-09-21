const express = require('express');
const userRoute = require('../routes/UsersRoute');

const app = express();
app.use(express.json());

app.use(userRoute);
// app.use(loginRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
