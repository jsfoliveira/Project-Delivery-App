const { Router } = require('express');
const LoginService = require('../services/LoginService');
const LoginController = require('../controllers/LoginController');

const route = Router();

const service = new LoginService();
const loginController = new LoginController(service);

route.post('/login', loginController.login);

// route.get('/login', loginController.readAll);

module.exports = route;
