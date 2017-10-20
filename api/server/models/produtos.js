'use strict';
module.exports = function(sequelize, DataTypes) {
  var Produtos = sequelize.define('Produtos', {
    nome: DataTypes.STRING
  }, {  });

  // Produtos.associate = function(models) {
  //   Produtos.hasMany(models.Comunicacao, {
  //     foreignKey: 'comunicacao_id',
  //     as: 'comunicacao',
  //   });
  // };

  return Produtos;
};