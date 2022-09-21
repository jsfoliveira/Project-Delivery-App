const { Router } = require('express');
const ProductsService = require('../services/SalesService');
const ProductsController = require('../controllers/SalesController');

const ROUTE = '/products';
const route = Router();

const service = new ProductsService();
const productsController = new ProductsController(service);

route.post(ROUTE, (req, res) =>
  productsController.create(req, res));

route.get(ROUTE, (req, res) =>
  productsController.read(req, res));

route.put(`${ROUTE}/:id`, (req, res) =>
  productsController.update(req, res));

route.delete(`${ROUTE}/:id`, (req, res) =>
  productsController.ontroller.delete(req, res));

module.exports = route;