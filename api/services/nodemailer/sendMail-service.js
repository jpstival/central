const transporter = require('./transporter-service');
const mailOptions = require('./mailOptions-service');

function sendMailService(){
    this.enviar = enviar;
    return this;
}

function enviar(config, dados, res){
    // send mail with defined transport object
    transporter.configuracao(config)
        .sendMail(mailOptions.semAnexo(dados), (error, info) => {
        if (error) {
            res.send(error.response);
            return console.log(error);
        }
        console.log(info);
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send(info.response);
    });
};

module.exports = sendMailService();