'use strict';
const transporter = require('./transporter-service');
const mailOptions = require('./mailOptions-service');

console.log('entrou enviar');

function enviar(){
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};

module.exports = enviar();