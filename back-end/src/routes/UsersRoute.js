const { Router } = require('express');
const UserService = require('../services/UsersService');
const UserController = require('../controllers/UserController');

const route = Router();

const service = new UserService();
const userController = new UserController(service);

route.post('/users', userController.create);

route.get('/users', userController.readAll);

// // loginroute.get('/cars/:id', (req, res) =>
// //   userController.readOne(req, res));

// // loginroute.put('/cars/:id', (req, res) =>
// //   userController.update(req, res));

// // loginroute.delete('/cars/:id', (req, res) =>
// //   userController.delete(req, res));

module.exports = route;