const Usuario = require('../../server/src/usuario/controller/usuarioCtrl');
const Comunicado = require('../../server/src/comunicacao/controller/comunicadoCtrl');

function sendMailService() {
    this.enviar = enviar;
    return this;
}

function enviar(req, res) {
    // send mail with defined transport object
    var id = 0
    Usuario.VerificaUsuario(req, function (id) {
        console.log(id)
        if (id > 0) {
            const mailGun = require('./envioMailGun');
            mailGun.enviar(req, res, function(mailId){
                Comunicado.SalvaComunicado(req, res, id);
            });
        } else {
            const nodemailer = require('./envioNodeMailer');
            nodemailer.enviar(req, res);
        }
    });
};

module.exports = sendMailService();