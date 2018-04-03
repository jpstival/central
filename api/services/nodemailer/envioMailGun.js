// sendMailService.enviar(config, dados);
var mailgun = require("mailgun-js");
var api_key = require('./../../server/config/mailgun').api;
var DOMAIN = require('./../../server/config/mailgun').domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

module.exports = {
    enviar: function (req, res, callback) {
        var config = req.body.config;
        var dados = req.body.dados;
        console.log(api_key);
        console.log(DOMAIN);
        
        console.log(dados.from);
        var data = {
            from: dados.from,
            to: dados.to,
            subject: dados.subject,
            attachment: ''
        };
        console.log(data.from);

        if (dados.html) {
            data.html= dados.html // html body
        } else {
            data.text= dados.text // plain text body}
        }

        this.criarArquivos(dados, function(result){
            console.log('result'+result)
            attachment: result

            mailgun.messages().send(data, function (error, body) {
                    if (error) {
                        console.log(error);
                    } else {
                        // require("fs").unlink(filename, function(err) {
                        //     console.log(error);
                        // });
                        return callback(body.id);
                    }
                });
        })

        // dados.anexo.forEach(function (anexos) {
        //     console.log(anexos.filename);
        //     console.log(anexos.content);
        //     require("fs").writeFile(anexos.filename, anexos.content, 'base64', function(err) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             //data.attachment = [filename]//, filepath1];
        //             if (filename) {
        //                 filename = anexos.filename
        //             } else {
        //                 filename = filename +','+ anexos.filename
        //             }
        //         }
        //     });
        //     console.log(filename);
        // })
        // .then(function(filename){
        //     console.log(filename);
        //     data.attachment = [filename];

        //     mailgun.messages().send(data, function (error, body) {
        //             if (error) {
        //                 console.log(error);
        //             } else {
        //                 // require("fs").unlink(filename, function(err) {
        //                 //     console.log(error);
        //                 // });
        //                 return callback(body.id);
        //             }
        //         });
        // });

        // if (dados.anexo[0]) {
        //     var body = req.body;
        //     var filename = body.dados.anexo[0].filename;
        //     var content = body.dados.anexo[0].content;
        //     require("fs").writeFile(filename, content, 'base64', function(err) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             var filepath1 = './DIFACT.docx';
        //             data.attachment = [filename]//, filepath1];
        //             mailgun.messages().send(data, function (error, body) {
        //                 if (error) {
        //                     console.log(error);
        //                 } else {
        //                     console.log(body);
        //                     require("fs").unlink(filename, function(err) {
        //                         console.log(error);
        //                     });
        //                     return callback(body.id);
        //                 }
        //             });
        //         }
        //     });
        // } else {
        //     console.log('2 '+data.attachment)
        //     mailgun.messages().send(data, function (error, body) {
        //         if (error) {
        //             console.log(error);
        //         } else {
        //             console.log(body);
        //             return callback(body.id);
        //         }
        //     });
        // };

        // if (dados.anexo[0]) {
        //     attachment: dados.anexo
        // };
    },

    criarArquivos: function(dados, callback){
        var filename = '';
        dados.anexo.forEach(function (anexos) {
            console.log(anexos.filename);
            console.log(anexos.content);
            require("fs").writeFile(anexos.filename, anexos.content, 'base64', function(err) {
                if (err) {
                    console.log(err);
                }
            });
            //data.attachment = [filename]//, filepath1];
            if (filename == '') {
                filename = anexos.filename
            } else {
                filename = filename +','+ anexos.filename
            }
            console.log('filename '+    filename);
        })
        console.log('filename 2 '+    filename);
        return callback(filename);
    }
}