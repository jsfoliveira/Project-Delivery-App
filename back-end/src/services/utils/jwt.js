const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' });

module.exports = {
  sign: (obj) => {
    const { id, password, ...publicInfo } = obj;
    return jwt.sign(publicInfo, secret);
  },

  verify: (token) => jwt.verify(token, secret),
};