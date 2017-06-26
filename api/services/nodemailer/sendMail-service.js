const transporter = require('./transporter-service');
const mailOptions = require('./mailOptions-service');

function sendMailService(){
    this.enviar = enviar;
    return this;
}

function enviar(host, port, secure, email, senha){
    // send mail with defined transport object

    transporter.configuracao(config)
        .sendMail(mailOptions.semAnexo(config), (error, info) => {
        if (error) {
            return console.log(error);
        }
        resolve(console.log('Message %s sent: %s', info.messageId, info.response));
    });
};

module.exports = sendMailService();