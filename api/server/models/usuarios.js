'use strict';
module.exports = function(sequelize, DataTypes) {
  var Usuarios = sequelize.define('Usuarios', {
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome: DataTypes.STRING
  }, {  });

  Usuarios.associate = function(models) {
    Usuarios.hasMany(models.Comunicados, {
      foreignKey: 'comunicado_id',
      as: 'comunicado',
    });
  };

  return Usuarios;
};