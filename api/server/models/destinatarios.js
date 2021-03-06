'use strict';
module.exports = function(sequelize, DataTypes) {
  var Destinatarios = sequelize.define('Destinatarios', {
    destinatario: DataTypes.STRING,
    tipo: DataTypes.STRING,
    dt_hr_de_leitura: DataTypes.DATE
  }, {  });

  Destinatarios.associate = function(models) {
    Destinatarios.belongsTo(models.Comunicados, {
      as: 'comunicado',
      foreignKey: 'comunicado_id',
      onDelete: 'CASCADE',
    });
  };

  return Destinatarios;
};