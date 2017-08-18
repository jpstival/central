const transporter = require('./transporter-service');
const mailOptions = require('./mailOptions-service');
var sequelize     = require('../../DB/DB-connection');

function sendMailService(){
    this.enviar = enviar;
    return this;
}

function enviar(config, dados, res){
    // send mail with defined transport object
    transporter.configuracao(config)
        .sendMail(mailOptions.semAnexo(dados), (error, info) => {
        if (error) {
            res.send(error.response);
            return console.log(error);
        }
        status = info.response.substring(0,3);
        if (status == 250) {
            sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        } 
        //console.log('Message %s sent: %s', info.messageId, info.response);
        //res.send(info.response);
    });
};

module.exports = sendMailService();