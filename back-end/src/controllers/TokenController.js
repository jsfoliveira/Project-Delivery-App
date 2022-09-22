const jwt = require('../services/utils/jwt');

class TokenController {  
  constructor() {
    this.token = this.token.bind(this);
  }

    async token(req, res) {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token);
        res.status(200).json(decoded);
      }
  }
  
module.exports = TokenController;