import { Router} from 'express';
import SalesProductsService from '../services/SalesProductService';
import SalesProductsController from '../controllers/SalesProductsController';

const route = Router();

const service = new SalesProductsService();
const salesProductsController = new SalesProductsController(service);

route.post('/salesproduct', (req, res) =>
salesProductsController.create(req, res));

route.get('/salesproduct', (req, res) =>
salesProductsController.read(req, res));

route.get('/salesproduct/:id', (req, res) =>
salesProductsController.readOne(req, res));

route.put('/salesproduct/:id', (req, res) =>
salesProductsController.update(req, res));

route.delete('/salesproduct/:id', (req, res) =>
salesProductsController.delete(req, res));

export default route;