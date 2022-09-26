const { Router } = require('express');
const TokenController = require('../controllers/TokenController');

const route = Router();

route.get('/', TokenController);

module.exports = route;