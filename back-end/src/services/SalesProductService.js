// const { SalesProducts } = require('../database/models');

class SalesProductsService {
  async create(obj) {
    const result = await this.SalesProducts.create(obj);
    return result;
  }

  async readAll() {
    const result = await this.SalesProducts.findAll();
    return result;
  }

  async readOne(id) {
    const result = await this.SalesProducts.findByPk(id);
    return result;
  }

  async update(id, obj) {
    const result = await this.SalesProducts.update(id, obj);
    return result;
  }

  async delete(id) {
    const result = await this.SalesProducts.delete(id);
    return result;
  }
}

module.exports = SalesProductsService;