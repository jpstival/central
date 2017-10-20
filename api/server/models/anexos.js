'use strict';
module.exports = function(sequelize, DataTypes) {
  var Anexos = sequelize.define('anexos', {
    nomearquivo: DataTypes.STRING,
    conteudo: DataTypes.TEXT
  }, { } );

  // anexos.associate = function(models) {
  //   anexos.belongsTo(models.Comunicacao, {
  //     as: 'comunicação',
  //     foreignKey: 'comunicacao_id',
  //     onDelete: 'CASCADE',
  //   });
  // };

  return Anexos;
};