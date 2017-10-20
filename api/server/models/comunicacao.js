'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comunicacao = sequelize.define('Comunicacao', {
    rem_email: DataTypes.STRING,
    rem_nome: DataTypes.STRING,
    assunto: DataTypes.STRING,
    corpo: DataTypes.STRING,
    retorno: DataTypes.BOOLEAN,
    carimbo: DataTypes.BOOLEAN,
    // dt_hr_envio: DataTypes.DATE,
    // dt_hr_recebimento: DataTypes.DATE,
    anexo: DataTypes.BOOLEAN
  }, {

  });

  // Comunicacao.associate = function(models) {
  //   Comunicacao.hasMany(models.Anexos, {
  //     foreignKey: 'anexo_id',
  //     as: 'anexos',
  //   });

  //   Comunicacao.hasMany(models.Destinatarios, {
  //     foreignKey: 'destinatario_id',
  //     as: 'destinatarios',
  //   });

  //   Comunicacao.belongsTo(models.Usuarios, {
  //       as: 'usuarios',
  //       foreignKey: 'usuario_id',
  //       onDelete: 'CASCADE',
  //   });

  //   Comunicacao.belongsTo(models.Produtos, {
  //     as: 'produtos',
  //     foreignKey: 'produto_id',
  //     onDelete: 'CASCADE',
  // });
    
 // };


  return Comunicacao;
};