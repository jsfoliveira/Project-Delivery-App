// const { Sales } = require('../database/models');

export default class SalesService {
  async create(obj) {
    const result = await this.Sales.create(obj);
    return result;
  }

  async readAll() {
    const result = await this.Sales.findAll();
    return result;
  }

  async readOne(id) {
    const result = await this.Sales.findByPk(id);
    return result;
  }

  async update(id, obj) {
    const result = await this.Sales.update(id, obj);
    return result;
  }

  async delete(id) {
    const result = await this.Sales.delete(id);
    return result;
  }
}
