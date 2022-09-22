const md5 = require('md5');
const { Users } = require('../database/models');

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
      return result;
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

  // async readOne(id) {
  //   const result = await Users.findByPk(id);
  //   return result;
  // }

  // async update(id, obj) {
  //   const result = await Users.update(id, obj);
  //   return result;
  // }

  // async delete(id) {
  //   const result = await Users.delete(id);
  //   return result;
  // }
}

module.exports = UserService;
