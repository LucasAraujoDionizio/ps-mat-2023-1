'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City,
        {
          foreignKey: 'supplier_id', //campo da tabela estrangeira
          sourceKey: 'id', //campo da tabela local'
          as: 'supplier'//nome do campo de associação
        })
    }
  }
  Product.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      allowNull:false,
      type: DataTypes.STRING(100)
    },
    quantity:{
      allowNull:false,
      type: DataTypes.DECIMAL(18,2)
    },
    unit: {
      allowNull:false,
      type: DataTypes.ENUM('Un','Kg')
    },
    supplier_id: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};