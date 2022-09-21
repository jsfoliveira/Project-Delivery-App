const { Sales } = require('../database/models');

export default class SalesService {
  async create(obj) {
    const result = await Sales.create(obj);
    return result;
  }

  async readAll() {
    const result = await Sales.findAll();
    return result;
  }

  async readOne(id) {
    const result = await Sales.findByPk(id);
    return result;
  }

  async update(id, obj) {
    const result = await Sales.update(id, obj);
    return result;
  }

  async delete(id) {
    const result = await Sales.delete(id);
    return result;
  }
}
