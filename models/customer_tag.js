'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerTag.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
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
    modelName: 'CustomerTag',
    tableName: 'customer_tags'
  });
  return CustomerTag;
};