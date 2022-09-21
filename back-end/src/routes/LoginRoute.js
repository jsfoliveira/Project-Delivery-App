const { Router } = require('express');
const LoginService = require('../services/LoginService');
const LoginController = require('../controllers/LoginController');

const route = Router();

const service = new LoginService();
const loginController = new LoginController(service);

route.post('/login', loginController.login);

route.get('/login', loginController.readAll);

// // loginroute.get('/cars/:id', (req, res) =>
// //   userController.readOne(req, res));

// // loginroute.put('/cars/:id', (req, res) =>
// //   userController.update(req, res));

// // loginroute.delete('/cars/:id', (req, res) =>
// //   userController.delete(req, res));

module.exports = route;