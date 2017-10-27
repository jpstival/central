'use strict';
module.exports = function(sequelize, DataTypes) {
  var Produtos = sequelize.define('Produtos', {
    nome: DataTypes.STRING
  }, {  });

  Produtos.associate = function(models) {
    Produtos.hasMany(models.Comunicados, {
      foreignKey: 'comunicado_id',
      as: 'comunicado',
    });
  };

  return Produtos;
};