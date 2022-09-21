export default class ProductService {
  constructor(product) {
    this.product = product;
    this.create = this.create.bind(this);
    this.readAll = this.readAll.bind(this);
    this.readOne = this.readOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);  
  }

  async create(obj) {
    const result = await this.product.create(obj);
    return result;
  }

  async readAll() {
    const result = await this.product.findAll();
    return result;
  }

  async readOne(id) {
    const result = await this.product.findByPk(id);
    return result;
  }

  async update(id, obj) {
    const result = await this.product.update(id, obj);
    return result;
  }

  async delete(id) {
    const result = await this.product.delete(id);
    return result;
  }
}
