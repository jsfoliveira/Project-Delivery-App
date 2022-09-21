const { Router } = require('express');
const SalesService = require('../services/SalesService');
const SalesController = require('../controllers/SalesController');

const ROUTE = '/sales';
const route = Router();

const service = new SalesService();
const salesController = new SalesController(service);

route.post(ROUTE, (req, res) =>
  salesController.create(req, res));

route.get(ROUTE, (req, res) =>
  salesController.read(req, res));

route.get(`${ROUTE}/:id`, (req, res) =>
  salesController.readOne(req, res));

route.put(`${ROUTE}/:id`, (req, res) =>
  salesController.update(req, res));

route.delete(`${ROUTE}/:id`, (req, res) =>
  salesController.delete(req, res));

module.exports = route;