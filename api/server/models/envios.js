'use strict';
module.exports = function(sequelize, DataTypes) {
  var envios = sequelize.define('envios', {
    rememail: DataTypes.STRING,
    remnome: DataTypes.STRING,
    assunto: DataTypes.STRING,
    corpo: DataTypes.STRING,
    anexo: DataTypes.BOOLEAN
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     envios.hasMany(models.anexos, {
    //       foreignKey: 'anexoId',
    //       as: 'anexos',
    //     });
    //     // envios.belongsTo(models.empresas, {
    //     //   foreignKey: 'empresaId',
    //     //   onDelete: 'CASCADE',
    //     // });
    //   }
    // }
  });
  
  envios.associate = function(models) {
    envios.hasMany(models.anexos, {
      foreignKey: 'anexoId',
      as: 'anexos',
    });
  };

  return envios;
};