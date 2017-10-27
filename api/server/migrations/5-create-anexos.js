'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Anexos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comunicado_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Comunicados',
          key: 'id',
          as: 'comunicado_id',
        },
      },
      nomearquivo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      conteudo: {
        allowNull: false,
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Anexos');
  }
};