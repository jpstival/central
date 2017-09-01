'use strict';
module.exports = function(sequelize, DataTypes) {
  var Envio = sequelize.define('Envio', {
    rememail: DataTypes.STRING,
    remnome: DataTypes.STRING,
    assunto: DataTypes.STRING,
    corpo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Envio;
};