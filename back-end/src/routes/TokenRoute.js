const { Router } = require('express');
const TokenController = require('../controllers/TokenController');

const route = Router();

route.get('/token', TokenController);

module.exports = route;