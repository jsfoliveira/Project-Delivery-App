const jwt = require('../services/utils/jwt');

class SalesController {
  constructor(service) {
    this.service = service;
    this.create = this.create.bind(this);
    this.readAll = this.readAll.bind(this);
    this.readOne = this.readOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token);
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  }

  async readAll(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token);
    const result = await this.service.readAll();
    res.status(200).json(result);
  }

  async readOne(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token);
    const result = await this.service.readOne(req.params.id);
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
    jwt.verify(token);
    await this.service.delete(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = SalesController;