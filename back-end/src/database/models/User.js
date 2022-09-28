const { DataTypes } = require('sequelize');
const { INTEGER, STRING } = DataTypes;

const CreateUser = (sequelize) => {
  const User = sequelize.define('Users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING,
    email: STRING,
    password: STRING,
    role: {
      type: STRING(20),
      allowNull: false, 
      defaultValue: 'customer',
    },
  }, {
    timestamps: false,
    tableName: 'users',
  });
  User.associate = (models) => {
    User.hasMany(models.Sales, { as: 'SalesUser', foreignKey: 'userId' });
    User.hasMany(models.Sales, { as: 'SalesSeller', foreignKey: 'sellerId' });
  };
  return User;
}

module.exports = CreateUser;
