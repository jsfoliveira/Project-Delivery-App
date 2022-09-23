const { Router } = require('express');
const ProductService = require('../services/ProductService');
const ProductController = require('../controllers/ProductController');

const ROUTE = '/products';
const route = Router();

const service = new ProductService();
const productsController = new ProductController(service);

route.post(ROUTE, (req, res) =>
  productsController.create(req, res));

route.get(ROUTE, (req, res) =>
  productsController.readAll(req, res));

route.get(`${ROUTE}/:id`, (req, res) =>
  productsController.readOne(req, res));

route.put(`${ROUTE}/:id`, (req, res) =>
  productsController.update(req, res));

route.delete(`${ROUTE}/:id`, (req, res) =>
  productsController.ontroller.delete(req, res));

module.exports = route;