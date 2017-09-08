'use strict';
module.exports = function(sequelize, DataTypes) {
  var anexos = sequelize.define('anexos', {
    nomearquivo: DataTypes.STRING,
    conteudo: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        anexos.belongsTo(models.envios, {
          foreignKey: 'envioId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return anexos;
};