const { Router } = require('express');
const UserService = require('../services/UsersService');
const UserController = require('../controllers/UserController');

const route = Router();

const service = new UserService();
const userController = new UserController(service);

route.post('/users', userController.create);

route.get('/user', userController.readAll);

route.get('/user/seller', userController.readSeller);

module.exports = route;