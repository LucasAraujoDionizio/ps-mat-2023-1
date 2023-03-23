'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   this.hasMany(models.CustomerTag, {
    //     foreignKey: 'tag_id',
    //     sourceKey: 'id',
    //     as:'customers'
    //   })
      this.belongsToMany(models.Tag,{
        through:'customer_tags', //tabela intermediaria
        foreignKey: 'tag_id', //chave estrangeira  ]
        otherKey: 'customer_id', //outra chave da tabela intermediaria
        as: 'customers'//nome do campo de associação (plural)
      })
    }
  }
  Tag.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      allowNull:false,
      type: DataTypes.STRING(30)
    },
    color: {
      type: DataTypes.STRING(8)
    },
    type: {
      allowNull:false,
      type: DataTypes.ENUM('C','O')
    },
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tags'
  });
  return Tag;
};