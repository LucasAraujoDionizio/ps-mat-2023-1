'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City,
        {
          foreignKey: 'city_id', //campo da tabela estrangeira
          sourceKey: 'id', //campo da tabela local'
          as: 'city'//nome do campo de associação
        })
        this.hasMany(models.CustomerTag,
          {
            foreignKey: 'customer_id', //campo da tabela estrangeira
            sourceKey: 'id', //campo da tabela local'
            as: 'tags'//nome do campo de associação
          })
    }
  }
  Customer.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    is_whatsapp: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    city_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
  });
  return Customer;
};