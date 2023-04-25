'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Customer,
        {
          foreignKey: 'supplier_id', //campo da tabela estrangeira
          sourceKey: 'id', //campo da tabela local'
          as: 'products'//nome do campo de associação
        })
    }
    
  }
  Supplier.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull:false,
      type: DataTypes.STRING(100)
    },
    address: {
      type: DataTypes.TEXT
    },
    phone: {
      allowNull:false,
      type: DataTypes.STRING(20)
    },
  }, {
    sequelize,
    modelName: 'Supplier',
    tableName: 'suppliers'
  });
  return Supplier;
};