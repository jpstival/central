const transporter = require('./transporter-service');
const mailOptions = require('./mailOptions-service');
const Comunicacao = require('../../server/models').comunicacao;;
//const Anexo = require('../../server/models').anexos;;
const Destinatario = require('../../server/models').destinatarios;;

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
                    return Comunicacao.create({
                        usuario_id: config.usuario,
                        produto_id: config.produto,
                        rem_email: config.email,
                        rem_nome: dados.from,
                        assunto: dados.subject,
                        corpo: dados.text,
                        anexo: true
                        })
                        // .then(function(comunicacao){
                        //     for (var anexos in dados.anexo){
                        //         return Anexo.create({
                        //             comunicacao_id: comunicacao.id,
                        //             nomearquivo: anexos.filename,
                        //             conteudo: anexos.content
                        //         })
                        //     }
                        // })
                        // .then(function(comunicacao){
                        //     for (var dest in dados.to){
                        //          Destinatario.create({
                        //             comunicacao_id: comunicacao.id,
                        //             destinatario: dest,
                        //             tipo: 'N'
                        //         })
                        //     };
                        //     for (var dest in dados.cc){
                        //         Destinatario.create({
                        //            comunicacao_id: comunicacao.id,
                        //            destinatario: dest,
                        //            tipo: 'C'
                        //        })
                        //     };
                        //     for (var dest in dados.bcc){
                        //         Destinatario.create({
                        //         comunicacao_id: comunicacao.id,
                        //         destinatario: dest,
                        //         tipo: 'O'
                        //         })
                        //     }  
                            //return console.log('salvou todos destinatarios');
                        //})
                        .then(
                            res.send('produto cadastrado com sucesso')
                        )
                        .catch(res.send('não foi possivel salvar'));
            };
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
                    return Comunicacao.create({
                        // usuario_id: 1,
                        // produto_id: 1,
                        rem_email: dados.from,
                        rem_nome: dados.from,
                        assunto: dados.subject,
                        corpo: dados.text
                        //anexo: true
                        })
                        .then(res.send('salvo com sucesso'))
                        .catch(res.send('não foi possivel salvar'));
                
            };
            //console.log('Message %s sent: %s', info.messageId, info.response);
            //res.send(info.response);
        });
    }
};

module.exports = sendMailService();