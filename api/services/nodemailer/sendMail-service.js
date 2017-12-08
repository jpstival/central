const transporter   = require('./transporter-service');
const mailOptions   = require('./mailOptions-service');
const Comunicado    = require('../../server/models').Comunicados;
const Anexo         = require('../../server/models').Anexos;
const Destinatario  = require('../../server/models').Destinatarios;
const Usuarios      = require('../../server/src/usuario/controller/usuarioCtrl');

function sendMailService(){
    this.enviar = enviar;
    return this;
}

function enviar(config, dados, res){
    // send mail with defined transport object
        transporter.configuracao(config, dados)
            .sendMail(mailOptions.enviarEmail(dados,config), (error, info) => {
            if (error) {
                res.send(error.response);
                return console.log(error);
            }
            status = info.response.substring(0,3);

            if (status == 250) {

                var id = 0;
                    Usuarios.VerificaUsuario(config,function(id){
                            console.log('saida '+id);
                        });
                    console.log('out '+id)
                    console.log('result')

                    
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

                    return Comunicado.create({
                        usuario_id: 1,
                        produto_id: config.produto,
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
                            res.send('email com gravação')
                        )
                        .catch(
                            //res.send('não foi possivel salvar')
                        );
                    //} else {
                        //res.send('enviado sem gravação');
                    //}
                };
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send(info.response);
        });
};

module.exports = sendMailService();
// const transporter   = require('./transporter-service');
// const mailOptions   = require('./mailOptions-service');
// const Comunicado    = require('../../server/models').Comunicados;
// const Anexo         = require('../../server/models').Anexos;
// const Destinatario  = require('../../server/models').Destinatarios;
// const Usuarios      = require('../../server/models').Usuarios;

// function sendMailService(){
//     this.enviar = enviar;
//     return this;
// }

// function enviar(config, dados, res){
//     // send mail with defined transport object
//         transporter.configuracao(config, dados)
//             .sendMail(mailOptions.enviarEmail(dados,config), (error, info) => {
//             if (error) {
//                 res.send(error.response);
//                 return console.log(error);
//             }
//             status = info.response.substring(0,3);

//             if (status == 250) {
//                 Usuarios.findOne({ 
//                     where: {
//                     login: config.usuario,
//                     senha: config.senhaUsuario
//                     },
//                     attributes: ['id']
//                 }).then(function (result) {
//                     if (result) {

//                     var texto = dados.text;
//                     var tipo = 'T';
//                     if (dados.html){
//                         texto = dados.html
//                         tipo = 'H'
//                     };
//                     var possuiAnexo = false;
//                     if (dados.anexo[0]){
//                         possuiAnexo = true
//                     };

//                     return Comunicado.create({
//                         usuario_id: result.id,
//                         produto_id: config.produto,
//                         rem_email: config.email,
//                         rem_nome: dados.from,
//                         assunto: dados.subject,
//                         corpo: texto,
//                         tipo_corpo: tipo,
//                         retorno: false,
//                         carimbo: false,
//                         anexo: possuiAnexo
//                         })
//                         .then(function(comunicado){
//                             dados.anexo.forEach(function(anexos){
//                                 return Anexo.create({
//                                     comunicado_id: comunicado.id,
//                                     nomearquivo: anexos.filename,
//                                     conteudo: anexos.content
//                                 })
//                             });
//                             for (var dest in dados.to){
//                                     Destinatario.create({
//                                     comunicado_id: comunicado.id,
//                                     destinatario: dados.to[dest],
//                                     tipo: 'N'
//                                 })
//                             };
//                             for (var dest in dados.cc){
//                                 Destinatario.create({
//                                     comunicado_id: comunicado.id,
//                                     destinatario: dados.cc[dest],
//                                     tipo: 'C'
//                                 })
//                             };
//                             for (var dest in dados.bcc){
//                                 Destinatario.create({
//                                 comunicado_id: comunicado.id,
//                                 destinatario: dados.bcc[dest],
//                                 tipo: 'O'
//                                 })
//                             }  
//                             return console.log('salvou todos destinatarios');
//                         })
//                         .then(
//                             //res.send('email com gravação')
//                         )
//                         .catch(
//                             //res.send('não foi possivel salvar')
//                         );
//                     } else {
//                         //res.send('enviado sem gravação');
//                     }
//                     });
//                 };
//         console.log('Message %s sent: %s', info.messageId, info.response);
//         res.send(info.response);
//         });
// };

// module.exports = sendMailService();