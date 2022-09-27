const essa = (_req, res) => {
  const userData = 'Gustavo';
  return res.status(200).json({ userData });
}

module.exports = essa;
