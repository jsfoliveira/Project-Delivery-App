const { Users } = require('../database/models');

class UserService {
  // async create(obj) {
  //   const result = await Users.create(obj);
  //   return result;
  // }
  constructor() {
    this.users = Users;
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
