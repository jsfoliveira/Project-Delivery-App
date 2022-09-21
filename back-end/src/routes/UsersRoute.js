import { Router} from 'express';
import UserService from '../services/utils/UserService';
import UserController from '../controllers/UserController';

const route = Router();

const service = new UserService();
const userController = new UserController(service);

route.post('/login', (req, res) =>
  userController.create(req, res));

route.post('/register', (req, res) =>
  userController.read(req, res));

loginroute.get('/cars/:id', (req, res) =>
  userController.readOne(req, res));

loginroute.put('/cars/:id', (req, res) =>
  userController.update(req, res));

loginroute.delete('/cars/:id', (req, res) =>
  userController.delete(req, res));

export default route;