'use strict';
module.exports = function(sequelize, DataTypes) {
  var empresas = sequelize.define('empresas', {
    cnpj: DataTypes.STRING,
    nome: DataTypes.STRING,
    codigo: DataTypes.STRING,
    emp: DataTypes.STRING,
    situacao: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // empresas.hasMany(models.envios, {
        //   foreignKey: 'envioId',
        //   as: 'envios',
        // });
      }
    }
  });
  return empresas;
};