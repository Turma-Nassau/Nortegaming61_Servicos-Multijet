'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recarga', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelo: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      quantidade: {
        type: Sequelize.STRING(3),
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
      UsuariosId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id',
          as: 'userId'
        }
      }
   });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recarga');
  }
};