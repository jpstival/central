const nodemailer = require('nodemailer');

function transporterService(){
    this.configuracao = configuracao;

    return this;
}

function configuracao(config){
    console.log(config);
  let transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure, // secure:true for port 465, secure:false for port 587
      auth: {
          user: config.email,
          pass: config.senha
      }
  });

  return transporter;
}

module.exports = transporterService();