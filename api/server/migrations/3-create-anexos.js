'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('anexos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomearquivo: {
        type: Sequelize.STRING
      },
      conteudo: {
        type: Sequelize.TEXT
      },
      envioId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'envios',
          key: 'id',
          as: 'envioId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, 
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('anexos');
  }
};