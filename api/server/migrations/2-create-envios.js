'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('envios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rememail: {
        type: Sequelize.STRING
      },
      remnome: {
        type: Sequelize.STRING
      },
      assunto: {
        type: Sequelize.STRING
      },
      corpo: {
        type: Sequelize.STRING
      },
      anexo: {
        type: Sequelize.BOOLEAN
      },
      // empresaId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'empresas',
      //     key: 'id',
      //     as: 'empresaId',
      //   },
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('envios');
  }
};