const { Router } = require('express');
const UserService = require('../services/UsersService');
const UserController = require('../controllers/UserController');

const route = Router();

const service = new UserService();
const userController = new UserController(service);

route.post('/', userController.create);
route.get('/', userController.readAll);
route.get('/seller', userController.readSeller);
route.delete('/:id', userController.delete);

module.exports = route;