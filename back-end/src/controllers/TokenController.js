const jwt = require('../services/utils/jwt');

const TokenController = (req, res) => {  
  const token = req.headers.authorization;
  const decoded = jwt.verify(token);
  res.status(200).json(decoded);
};

module.exports = TokenController;