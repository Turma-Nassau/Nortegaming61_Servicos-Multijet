'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca_da_impressora: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      referencia: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      franquia_de_impressao: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      funcoes_adicionais: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      mais_informacoes: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Usuarios',
          key: 'id',
          as: 'userId'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('locacao');
  }
};