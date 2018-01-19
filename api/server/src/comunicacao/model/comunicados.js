'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comunicados = sequelize.define('Comunicados', {
    rem_email: DataTypes.STRING,
    rem_nome: DataTypes.STRING,
    assunto: DataTypes.STRING,
    corpo: DataTypes.STRING,
    tipo_corpo: DataTypes.STRING,
    retorno: DataTypes.BOOLEAN,
    carimbo: DataTypes.BOOLEAN,
    dt_hr_envio: DataTypes.DATE,
    dt_hr_recebimento: DataTypes.DATE,
    anexo: DataTypes.BOOLEAN
  }, {

  });

  Comunicados.associate = function(models) {
    Comunicados.hasMany(models.Anexos, {
      foreignKey: 'anexo_id',
      as: 'anexos',
    });

    Comunicados.hasMany(models.Destinatarios, {
      foreignKey: 'destinatario_id',
      as: 'destinatarios',
    });

    Comunicados.belongsTo(models.Usuarios, {
        as: 'usuarios',
        foreignKey: 'usuario_id',
        onDelete: 'CASCADE',
    });

    Comunicados.belongsTo(models.Produtos, {
      as: 'produtos',
      foreignKey: 'produto_id',
      onDelete: 'CASCADE',
  });
    
 };


  return Comunicados;
};