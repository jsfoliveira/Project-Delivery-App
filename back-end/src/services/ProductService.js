const { Products } = require('../database/models');

export default class ProductService {
  async create(obj) {
    const result = await Products.create(obj);
    return result;
  }

  async readAll() {
    const result = await Products.findAll();
    return result;
  }

  async readOne(id) {
    const result = await Products.findByPk(id);
    return result;
  }

  async update(id, obj) {
    const result = await Products.update(id, obj);
    return result;
  }

  async delete(id) {
    const result = await Products.delete(id);
    return result;
  }
}
