const { SalesProducts } = require('../database/models');

export default class SalesProducts {
  async create(obj) {
    const result = await SalesProducts.create(obj);
    return result;
  }

  async readAll() {
    const result = await SalesProducts.findAll();
    return result;
  }

  async readOne(id) {
    const result = await SalesProducts.findByPk(id);
    return result;
  }

  async update(id, obj) {
    const result = await SalesProducts.update(id, obj);
    return result;
  }

  async delete(id) {
    const result = await SalesProducts.delete(id);
    return result;
  }
}
