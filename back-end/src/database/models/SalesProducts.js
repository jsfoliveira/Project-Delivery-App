const { DataTypes } = require('sequelize');
const { INTEGER } = DataTypes;

const CreateSalesProducts = (sequelize) => {
  const SalesProduct = sequelize.define('SalesProducts', {
    saleId: {
      type: INTEGER,
      allowNull: false,
      field: 'sale_id',
      references: {
        model: 'sales',
        key: 'id',
      },
      primaryKey: true,
      onDelete: 'cascade',
    },
    productId: {
      type: INTEGER,
      allowNull: false,
      field: 'product_id',
      references: {
        model: 'products',
        key: 'id',
      },
      primaryKey: true,
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    quantity: INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
    tableName:'sales_products',
  });
  SalesProduct.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'Product',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Products.belongsToMany(models.Sales, {
      as: 'Sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  }
  return SalesProduct;
}

module.exports = CreateSalesProducts;
