export default class UserController {
  constructor(service) {
    this.service = service;
  }

  create = async (req, res) => {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  }

  read = async (_req, res) => {
    const result = await this.service.read();
    res.status(200).json(result);
  }

  readOne = async (req, res) => {
    const result = await this.service.readOne(req.params.id);
    res.status(200).json(result);
  }

  update = async (req, res) => {
    const result = await this.service.update(req.params.id, red.body);
    res.status(200).json(result);
  }

  delete = async (req, res) => {
    const result = await this.service.delete(req.params.id);
    res.status(200).json(result);
  }
}
