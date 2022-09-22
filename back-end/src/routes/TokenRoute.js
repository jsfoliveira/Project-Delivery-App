const { Router } = require('express');
const TokenController = require('../controllers/TokenController');

const route = Router();

const tokenController = new TokenController();

route.get('/token', tokenController.token);

module.exports = route;