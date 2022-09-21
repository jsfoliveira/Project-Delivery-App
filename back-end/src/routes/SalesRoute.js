import { Router} from 'express';
import SalesService from '../services/SalesService';
import SalesController from '../controllers/SalesController';

const route = Router();

const service = new SalesService();
const salesController = new SalesController(service);

route.post('/sales', (req, res) =>
  salesController.create(req, res));

route.get('/sales', (req, res) =>
  salesController.read(req, res));

route.get('/sales/:id', (req,res) =>
  salesController.readOne(req, res));

route.put('/sales/:id', (req,  res) =>
  salesController.update(req, res));

route.delete('/sales/:id', (req, res) =>
  carCs.ontroller.delete(req, res));

export default route;