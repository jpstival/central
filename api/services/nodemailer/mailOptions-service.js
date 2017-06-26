function mailOptionsService(){
    this.semAnexo = semAnexo;

    return this;
}

function semAnexo(config){
    // setup email data with unicode symbols
    console.log(config);
  let mailOptions = {
      from: config.from, // sender address
      to: config.to, // list of receivers
      subject: config.subject, // Subject line
      text: config.text, // plain text body
      html: config.html // html body
  };
 
  return mailOptions;
};

module.exports = mailOptionsService();