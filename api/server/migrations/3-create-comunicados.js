'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Comunicados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Usuarios',
          key: 'id',
          as: 'usuario_id',
        },
      },
      produto_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Produtos',
          key: 'id',
          as: 'produto_id',
        },
      },
      rem_email: {
        type: Sequelize.STRING
      },
      rem_nome: {
        type: Sequelize.STRING
      },
      assunto: {
        type: Sequelize.STRING
      },
      corpo: {
        type: Sequelize.STRING
      },
      tipo_corpo: {
        type: Sequelize.STRING
      },
      retorno: {
        type: Sequelize.BOOLEAN
      },
      carimbo: {
        type: Sequelize.BOOLEAN
      },
      dt_hr_envio: {
        type: Sequelize.DATE
      },
      dt_hr_recebimento: {
        type: Sequelize.DATE
      },
      anexo: {
        type: Sequelize.BOOLEAN
      },
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
    return queryInterface.dropTable('Comunicados');
  }
};