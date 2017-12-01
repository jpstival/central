const nodemailer = require('nodemailer');

function transporterService() {
    this.configuracao = configuracao;

    return this;
}

function configuracao(config, dados) {
    var usuario = config.email;

    if (config.host == 'smtplw.com.br') {
        usuario = dados.from;
    }

    if (usuario.indexOf('outlook') > 0 || usuario.indexOf('hotmail') > 0 || usuario.indexOf('live') > 0) {
        console.log('outlook')
        let transporter = nodemailer.createTransport({
            service: "hotmail",
            auth: {
                user: usuario,
                pass: config.senha
            }
        });
        return transporter;
    } else {
        console.log('outros')
        let transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: config.secure, // secure:true for port 465, secure:false for port 587
            auth: {
                user: usuario,
                pass: config.senha
            },
        });
        return transporter;
    }
};

module.exports = transporterService();