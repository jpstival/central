function mailOptionsService(){
    this.enviarEmail = enviarEmail;
    return this;
}

function enviarEmail(dados, config){
    var para = dados.from;

    if (config.host == 'smtplw.com.br') {
        para = config.email
    }

    // setup email data with unicode symbols
    if (dados.html){
        let mailOptions = {
            from: para, // sender address
            to: dados.to, // list of receivers
            cc: dados.cc,
            bcc: dados.bcc,
            subject: dados.subject, // Subject line
            html: dados.html, // html body
            attachments: dados.anexo
        }
        return mailOptions;
    } else {
        let mailOptions = {
            from: para, // sender address
            to: dados.to, // list of receivers
            cc: dados.cc,
            bcc: dados.bcc,
            subject: dados.subject, // Subject line
            text: dados.text, // plain text body
            attachments: dados.anexo
        }
        return mailOptions;
    }    
};

module.exports = mailOptionsService();