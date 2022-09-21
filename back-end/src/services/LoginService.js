const md5 = require('md5');
const { Users } = require('../database/models');
const jwt = require('./utils/jwt');

class LoginService {
  constructor() {
    this.user = Users;
  }
  
  async login(obj) {
    const { email, password } = obj;
    const passwordHash = md5(password);
    const result = await this.user.findOne({ where: { email, password: passwordHash } });
    if (!result) {
      const err = new Error('Email not found or Password not found!');
      err.name = 'notFound';
      throw err;
    }
    const token = jwt.sign(result);
    return token;
  }
}

module.exports = LoginService;