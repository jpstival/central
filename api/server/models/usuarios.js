'use strict';
module.exports = function(sequelize, DataTypes) {
  var Usuarios = sequelize.define('Usuarios', {
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome: DataTypes.STRING
  }, {  });

  // Usuarios.associate = function(models) {
  //   Usuarios.hasMany(models.Comunicacao, {
  //     foreignKey: 'comunicacao_id',
  //     as: 'comunicação',
  //   });
  // };

  return Usuarios;
};