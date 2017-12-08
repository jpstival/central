var Usuario = require('./../../../models').Usuarios;
console.log('entrou')
module.exports = {
	VerificaUsuario: function (config, callback) {
		Usuario.findOne({ 
			where: {
			login: config.usuario,
			senha: config.senhaUsuario
			},
			attributes: ['id']
		}).then(function(result){
			id = result.id
			console.log('1 '+id)
			return callback(id);
		});
	}
}