const { Router } = require('express');
const SalesService = require('../services/SalesService');
const SalesController = require('../controllers/SalesController');

const route = Router();

const service = new SalesService();
const salesController = new SalesController(service);

route.post('/', salesController.create);

route.get('/', salesController.readAll);

route.get('/:id', salesController.readOne);

route.put('/:id', salesController.update);

route.delete('/:id', salesController.delete);

module.exports = route;