const { Router } = require('express');
const ProductService = require('../services/ProductService');
const ProductController = require('../controllers/ProductController');

const route = Router();

const service = new ProductService();
const productsController = new ProductController(service);

// route.post('/', (req, res) =>
//   productsController.create(req, res));

route.get('/', (req, res) =>
  productsController.readAll(req, res));

// route.get('/:id', (req, res) =>
//   productsController.readOne(req, res));

// route.put('/:id', (req, res) =>
//   productsController.update(req, res));

// route.delete('/:id', (req, res) =>
//   productsController.ontroller.delete(req, res));

module.exports = route;