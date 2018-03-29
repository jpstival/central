const Usuario = require('../../server/src/usuario/controller/usuarioCtrl');
const Comunicado = require('../../server/src/comunicacao/controller/comunicadoCtrl');

function sendMailService() {
    this.enviar = enviar;
    return this;
}

function enviar(req, res) {
    // send mail with defined transport object
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
// const transporter = require('./transporter-service');
// const mailOptions = require('./mailOptions-service');
// const Usuario = require('../../server/src/usuario/controller/usuarioCtrl');
// const Comunicado = require('../../server/src/comunicacao/controller/comunicadoCtrl');

// function sendMailService() {
//     this.enviar = enviar;
//     return this;
// }

// function enviar(req, res) {
//     // send mail with defined transport object
//     transporter.configuracao(req)
//         .sendMail(mailOptions.enviarEmail(req), (error, info) => {
//             if (error) {
//                 res.send(error.response);
//                 return console.log(error);
//             }
//             status = info.response.substring(0, 3);

//             if (status == 250) {

//                 Usuario.VerificaUsuario(req, function (id) {
//                     if (id) {
//                         Comunicado.SalvaComunicado(req, res, id);
//                     } else {
//                         res.send('Enviado sem gravação');
//                     }
//                 });
//             };
//             console.log('Message %s sent: %s', info.messageId, info.response);
//         });
// };

// module.exports = sendMailService();