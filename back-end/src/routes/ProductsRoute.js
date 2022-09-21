import { Router } from 'express';
import ProductsService from '../services/SalesService';
import ProductsController from '../controllers/SalesController';

const route = Router();

const service = new ProductsService();
const productsController = new ProductsController(service);

route.post('/products', (req, res) =>
productsController .create(req, res));

route.get('/products', (req, res) =>
  salesController.read(req, res));

route.put('/products/:id', (req, res) =>
  salesController.update(req, res));

route.delete('/products/:id', (req, res) =>
  carCs.ontroller.delete(req, res));

export default route;