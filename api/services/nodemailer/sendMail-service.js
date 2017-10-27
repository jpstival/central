const transporter = require('./transporter-service');
const mailOptions = require('./mailOptions-service');
const Comunicado = require('../../server/models').Comunicados;
const Anexo = require('../../server/models').Anexos;
const Destinatario = require('../../server/models').Destinatarios;

function sendMailService(){
    this.enviar = enviar;
    return this;
}

function enviar(config, dados, res){
    // send mail with defined transport object
        transporter.configuracao(config)
            .sendMail(mailOptions.enviarEmail(dados), (error, info) => {
            if (error) {
                res.send(error.response);
                return console.log(error);
            }
            status = info.response.substring(0,3);
            console.log(status);
            if (status == 250) {
                    var texto = dados.text;
                    var tipo = 'T';
                    if (dados.html){
                        texto = dados.html
                        tipo = 'H'
                    };
                    var possuiAnexo = false;
                    if (dados.anexo[0]){
                        possuiAnexo = true
                    };
                    console.log(texto);
                    return Comunicado.create({
                        usuario_id: 1,
                        produto_id: 1,
                        rem_email: config.email,
                        rem_nome: dados.from,
                        assunto: dados.subject,
                        corpo: texto,
                        tipo_corpo: tipo,
                        retorno: false,
                        carimbo: false,
                        anexo: possuiAnexo
                        })
                        .then(function(comunicado){
                            dados.anexo.forEach(function(anexos){
                                return Anexo.create({
                                    comunicado_id: comunicado.id,
                                    nomearquivo: anexos.filename,
                                    conteudo: anexos.content
                                })
                            });
                            for (var dest in dados.to){
                                 Destinatario.create({
                                    comunicado_id: comunicado.id,
                                    destinatario: dados.to[dest],
                                    tipo: 'N'
                                })
                            };
                            for (var dest in dados.cc){
                                Destinatario.create({
                                    comunicado_id: comunicado.id,
                                   destinatario: dados.cc[dest],
                                   tipo: 'C'
                               })
                            };
                            for (var dest in dados.bcc){
                                Destinatario.create({
                                comunicado_id: comunicado.id,
                                destinatario: dados.bcc[dest],
                                tipo: 'O'
                                })
                            }  
                            return console.log('salvou todos destinatarios');
                        })
                        .then(
                            res.send('produto cadastrado com sucesso')
                        )
                        .catch(res.send('não foi possivel salvar'));
            };
        //console.log('Message %s sent: %s', info.messageId, info.response);
        //res.send(info.response);
        });
};

module.exports = sendMailService();