const { Router } = require('express');
const SalesProductsService = require('../services/SalesProductService');
const SalesProductsController = require('../controllers/SalesProductsController');

const ROUTE = '/salesproduct';
const route = Router();

const service = new SalesProductsService();
const salesProductsController = new SalesProductsController(service);

route.post(ROUTE, (req, res) =>
  salesProductsController.create(req, res));

route.get(ROUTE, (req, res) =>
  salesProductsController.read(req, res));

route.get(`${ROUTE}/:id`, (req, res) =>
  salesProductsController.readOne(req, res));

route.put(`${ROUTE}/:id`, (req, res) =>
  salesProductsController.update(req, res));

route.delete(`${ROUTE}/:id`, (req, res) =>
  salesProductsController.delete(req, res));

module.exports = route;