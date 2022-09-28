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
        { name, email, password: passwordHash, role: 'customer' },
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

  // async update(id, obj) {
  //   const result = await this.users.update(
  //     obj,
  //     { where: { id } },
  //   );
  //   return result;
  // }

  async delete(id) {
    await this.users.destroy({ where: { id } });
  }
}

module.exports = UserService;
