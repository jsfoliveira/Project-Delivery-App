const { Sales } = require('../database/models');

class SalesService {
  constructor() {
    this.sales = Sales;
  }
  
  async create(obj) {
    const result = await this.sales.create(obj);
    return result;
  }

  async readAll() {
    const result = await this.sales.findAll();
    return result;
  }

  async readOne(id) {
    const result = await this.sales.findByPk(id);
    return result;
  }

  async update(id, obj) {
    const result = await this.sales.update(id, obj);
    return result;
  }

  async delete(id) {
    const result = await this.Sales.delete(id);
    return result;
  }
}

module.exports = SalesService;