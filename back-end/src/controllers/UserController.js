const jwt = require('../services/utils/jwt');

class UserController {
  constructor(service) {
    this.service = service;
    this.create = this.create.bind(this);
    this.readAll = this.readAll.bind(this);
    this.readSeller = this.readSeller.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req, res) {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  }

  async readAll(_req, res) {
    const result = await this.service.readAll();
    res.status(200).json(result);
  }

  async readSeller(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token);
    const result = await this.service.readSeller('seller');
    res.status(200).json(result);
  }

  async update(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token);
    const result = await this.service.update(req.params.id, req.body);
    res.status(200).json(result);
  }

  async delete(req, res) {
    const token = req.headers.authorization;
    const verify = jwt.verify(token);
    if (verify.role === 'administrator') {
      const err = new Error('Unauthorized user!!!');
      err.name = 'UnauthorizedError';
    }
    await this.service.delete(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = UserController;
