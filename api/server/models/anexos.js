'use strict';
module.exports = function(sequelize, DataTypes) {
  var Anexos = sequelize.define('Anexos', {
    nomearquivo: DataTypes.STRING,
    conteudo: DataTypes.TEXT
  }, { } );

  Anexos.associate = function(models) {
    Anexos.belongsTo(models.Comunicados, {
      as: 'comunicado',
      foreignKey: 'comunicado_id',
      onDelete: 'CASCADE',
    });
  };

  return Anexos;
};