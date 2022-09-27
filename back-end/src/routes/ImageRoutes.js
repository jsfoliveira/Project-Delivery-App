const { Router } = require('express');
const essa = require('../images/essa.png');
const route = Router();

route.get('/ping', essa);

module.exports = route;
