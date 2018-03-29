var Usuario = require('./../../../models').Usuarios;

module.exports = {
	VerificaUsuario: function (req, callback) {
		var config = req.body.config;

		Usuario.findOne({
			where: {
				login: config.usuario,
				senha: config.senhaUsuario
			},
			attributes: ['id']
		})
		.then(function (result) {
			return callback(result.id);
		})
		.catch(function(){
			return callback(0);
		});
	}
}