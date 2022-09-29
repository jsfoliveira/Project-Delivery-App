const { Router } = require('express');
const UserService = require('../services/UsersService');
const UserController = require('../controllers/UserController');

const route = Router();

const service = new UserService();
const userController = new UserController(service);

route.post('/adm', userController.createAdm);
route.post('/', userController.create);
route.get('/seller', userController.readSeller);
route.get('/', userController.readAll);
route.delete('/:id', userController.delete);

module.exports = route;