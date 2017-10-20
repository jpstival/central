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
      cc: dados.cc,
      subject: dados.subject, // Subject line
      text: dados.text, // plain text body
      //html: dados.html // html body
  };
 
  return mailOptions;
};

function comAnexo(dados){
    console.log('comAnexo');
        // setup email data with unicode symbols
        console.log(dados.cc);
        console.log(dados.anexo);
      let mailOptions = {
          from: dados.from, // sender address
          to: dados.to, // list of receivers
          cc: dados.cc,
          subject: dados.subject, // Subject line
          text: dados.text, // plain text body
          //html: dados.html // html body
            attachments: dados.anexo
        //[

        //      {   // encoded string as an attachment
        //         filename: dados.anexo.filename,
        //         content: dados.anexo.content,
        //         encoding: 'base64'
        //     },
        //   ]
      };
     
      return mailOptions;
    };

module.exports = mailOptionsService();