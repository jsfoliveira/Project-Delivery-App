const { Router } = require('express');
const UserService = require('../services/UsersService');
const UserController = require('../controllers/UserController');

const route = Router();

const service = new UserService();
const userController = new UserController(service);

route.post('/users', userController.create);

route.get('/user/seller', userController.readSeller);

route.get('/user', userController.readAll);

module.exports = route;