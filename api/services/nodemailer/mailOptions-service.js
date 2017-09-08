function mailOptionsService(){
    this.semAnexo = semAnexo;
    this.comAnexo = comAnexo;
    return this;
}

function semAnexo(dados){
    console.log('semAnexo');
    // setup email data with unicode symbols
  let mailOptions = {
      from: dados.from, // sender address
      to: dados.to, // list of receivers
      bcc: dados.bcc,
      subject: dados.subject, // Subject line
      text: dados.text, // plain text body
      //html: dados.html // html body
  };
 
  return mailOptions;
};

function comAnexo(dados, anexo){
    console.log('comAnexo');
        // setup email data with unicode symbols
      let mailOptions = {
          from: dados.from, // sender address
          to: dados.to, // list of receivers
          bcc: dados.bcc,
          subject: dados.subject, // Subject line
          text: dados.text, // plain text body
          //html: dados.html // html body
          attachments: [
             {   // encoded string as an attachment
                filename: anexo.filename,
                content: anexo.content,
                encoding: 'base64'
            },
          ]
      };
     
      return mailOptions;
    };

module.exports = mailOptionsService();