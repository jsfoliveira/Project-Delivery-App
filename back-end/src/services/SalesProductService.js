const { SalesProducts } = require('../database/models');

class SalesProductsService {
  constructor() {
    this.salesProducts = SalesProducts;
  }

  async readAll() {
    const result = await this.salesProducts.findAll();
    return result;
  }

  async readOne(id) {
    const result = await this.salesProducts.findByPk(id);
    return result;
  }

  async update(id, obj) {
    const result = await this.salesProducts.update(id, obj);
    return result;
  }

  async delete(id) {
    const result = await this.salesProducts.delete(id);
    return result;
  }
}

module.exports = SalesProductsService;