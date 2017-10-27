function mailOptionsService(){
    this.enviarEmail = enviarEmail;
    return this;
}

function enviarEmail(dados){
        // setup email data with unicode symbols
        console.log(dados);
    if (dados.html){
        let mailOptions = {
            from: dados.from, // sender address
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
            from: dados.from, // sender address
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