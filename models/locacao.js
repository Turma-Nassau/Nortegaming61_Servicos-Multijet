'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  locacao.init({
    marca_da_impressora: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    referencia: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    franquia_de_impressao: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    funcoes_adicionais: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    mais_informacoes: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'locacao',
  });
  return locacao;
};