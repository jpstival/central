'use strict';
const nodemailer = require('nodemailer');

console.log('entrou configuracao');

function configuracao(){
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
          user: 'joaopaulosstival@gmail.com',
          pass: '986stival'
      }
  });
  console.log(transporter);
  return transporter;
}

module.exports = configuracao();