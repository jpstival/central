function mailOptionsService(){
    this.enviarEmail = enviarEmail;
    return this;
}

function enviarEmail(req){
    var config = req.body.config;
    var dados = req.body.dados;
    
    var para = dados.from;

    if (config.host == 'smtplw.com.br') {
        para = config.email
    }

    // setup email data with unicode symbols
    let mailOptions = {
        from: para, // sender address
        to: dados.to, // list of receivers
        cc: dados.cc,
        bcc: dados.bcc,
        subject: dados.subject, // Subject line
        attachments: dados.anexo
    }

    if (dados.html) {
        mailOptions.html= dados.html // html body
    } else {
        mailOptions.text= dados.text // plain text body}
    }
    
    return mailOptions
};

module.exports = mailOptionsService();