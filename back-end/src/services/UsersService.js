const md5 = require('md5');
const { Users } = require('../database/models');
const jwt = require('./utils/jwt');

class UserService {
  constructor() {
    this.users = Users;
  }
  
  async create(obj) {
    const { name, email, password } = obj;
    const passwordHash = md5(password);
    try {
      const result = await this.users.create(
        { name, email, password: passwordHash },
        );
      const { dataValues } = result;
      const token = jwt.sign(dataValues);
      const { role } = dataValues;
      return ({ token, name, email, role });
    } catch (error) {
      const err = new Error('Existing user!');
      err.name = 'ConflictError';
      throw err;
    }
  }

  async createAdm(obj) {
    const { name, email, password } = obj;
    const passwordHash = md5(password);
    try {
      const result = await this.users.create(
        { name, email, role: obj.role, password: passwordHash },
        );
      const { dataValues } = result;
      const token = jwt.sign(dataValues);
      const { role } = dataValues;
      return ({ token, name, email, role });
    } catch (error) {
      const err = new Error('Existing user!');
      err.name = 'ConflictError';
      throw err;
    }
  }

  async readAll() {
    const result = await this.users.findAll();
    return result;
  }

  async readSeller(role) {
    const result = await this.users.findAll({
      where: { role },
    });
    return result;
  }

  async delete(id) {
    const result = await this.users.destroy({ where: { id } });
    if (result === 0) {
      const err = new Error('User not found');
      err.name = 'NotFoundError';
      throw err;
    }
  }
}

module.exports = UserService;
