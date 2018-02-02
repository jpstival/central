const transporter = require('./transporter-service');
const mailOptions = require('./mailOptions-service');

module.exports = {
    enviar: function(req, res){
        transporter.configuracao(req, res)
        .sendMail(mailOptions.enviarEmail(req), (error, info) => {
            if (error) {
                res.send(error.response);
                return console.log(error);
            }
            status = info.response.substring(0, 3);
            if (status == 250) {
                res.send('Enviado sem gravação');
            };
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    }
}