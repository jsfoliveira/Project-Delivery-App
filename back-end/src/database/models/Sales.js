const { DataTypes } = require('sequelize');
const { INTEGER, STRING, DECIMAL, DATE, NOW } = DataTypes;

const CreateSale = (sequelize) => {
  const Sale = sequelize.define('Sales', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      }
    },
    sellerId: {
      type: INTEGER,
      allowNull: false,
      field: 'seller_id',
      references: {
        model: 'users',
        key: 'id',
      }
    },
    totalPrice: {
      type: DECIMAL(9,2),
      allowNull: false,
      field: 'total_price',
    },
    deliveryAdress: {
      type: STRING(100),
      allowNull: false,
      field: 'delivery_adress',
    },
    deliveryNumber: {
      type: STRING(50),
      allowNull: false,
      field: 'delivery_number',
    },
    saleDate: {
      type: DATE,
      defaultValue: NOW,
      allowNull: false,
      field: 'sale_date',
    },
    status: {
      type: STRING(50),
      allowNull: false,
      defaultValue: 'Pendente',
    },
  }, {
    timestamps: false,
    tableName: 'sales',
  });
  Sale.associate = (models) => {
    Sale.belongsTo(models.Users,
      {foreignKey: 'userId', as: 'users'},
    );
    Sale.belongsTo(models.Users,
      {foreignKey: 'sellerId', as: 'sellers'},
    );
  };
  return Sale;
};

module.exports = CreateSale;
