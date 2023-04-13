'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        through: 'order_rel_statuses',     //Tabela intermediária
        foreignKey: 'user_id',         //Chave strangeira da tabela iintermediaria
        otherKey: 'order_status_id',
        as: 'users'
      })

      this.belongsToMany(models.Order, {
        through: 'order_rel_statuses',     //Tabela intermediária
        foreignKey: 'order_id',         //Chave strangeira da tabela iintermediaria
        otherKey: 'order_status_id',
        as: 'orders'
      })
    }
  }
  OrderStatus.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sequence: {
      allowNull: false,
      type: DataTypes.SMALLINT
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'OrderStatus',
    tableName: 'order_statuses'
  });
  return OrderStatus;
};