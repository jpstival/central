const transporter = require('./transporter-service');
const mailOptions = require('./mailOptions-service');
const Envio = require('../../server/models').envios;
const Anexo = require('../../server/models').anexos;

function sendMailService(){
    this.enviar = enviar;
    return this;
}

function enviar(config, dados, res){
    // send mail with defined transport object
    if (dados.anexo){
        transporter.configuracao(config)
            .sendMail(mailOptions.comAnexo(dados), (error, info) => {
            if (error) {
                res.send(error.response);
                return console.log(error);
            }
            status = info.response.substring(0,3);
            console.log(status);
            if (status == 250) {
                    return Envio
                        .create({
                        remnome: dados.from,
                        rememail: dados.to,
                        assunto: dados.subject,
                        corpo: dados.text,
                        anexo: true
                        })
                        .then(function(envio){
                            return Anexo.create({
                                envioId: envio.id,
                                nomearquivo: dados.anexo.filename,
                                conteudo: dados.anexo.content
                            })
                        }).then(
                            res.send('produto cadastrado com sucesso')
                        )
                        .catch(res.send('não foi possivel salvar'));
            }
        
        //console.log('Message %s sent: %s', info.messageId, info.response);
        //res.send(info.response);
        });
    }else{
        transporter.configuracao(config)
            .sendMail(mailOptions.semAnexo(dados), (error, info) => {
            if (error) {
                res.send(error.response);
                return console.log(error);
            }
            status = info.response.substring(0,3);
            console.log(status);
            if (status == 250) {
                    console.log(dados);
                    return Envio
                        .create({
                        remnome: dados.from,
                        rememail: dados.to,
                        assunto: dados.subject,
                        corpo: dados.text,
                        anexo: false,
                        })
                        .then(res.send('salvo com sucesso'))
                        .catch(res.send('não foi possivel salvar'));
                
            }
            
            //console.log('Message %s sent: %s', info.messageId, info.response);
            //res.send(info.response);
        });
    }
};

module.exports = sendMailService();