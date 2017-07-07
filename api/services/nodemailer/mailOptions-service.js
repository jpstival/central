function mailOptionsService(){
    this.semAnexo = semAnexo;

    return this;
}

function semAnexo(dados){

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

module.exports = mailOptionsService();