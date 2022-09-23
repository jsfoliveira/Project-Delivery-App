const { DataTypes } = require('sequelize');
const { INTEGER, STRING, DECIMAL } = DataTypes;

const CreateProduct = (sequelize) => {
  const Product = sequelize.define('Products', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING,
    price: DECIMAL,
    urlImage: {
      type: STRING(200),
      allowNull: false,
      field: 'url_image',
    },
  }, {
    timestamps: false,
    tableName: 'products',
    underscore: true,
  });
  return Product;
}

module.exports = CreateProduct;
