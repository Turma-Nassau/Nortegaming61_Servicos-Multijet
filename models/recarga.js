'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  recarga.init({
    modelo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    quantidade: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'recarga',
  });
  return recarga;
};