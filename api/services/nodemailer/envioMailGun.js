// sendMailService.enviar(config, dados);
var mailgun = require("mailgun-js");
var api_key = 'key-e3b911b1589acfd0c76bac958ea2edee';
var DOMAIN = 'sandboxc5906c1aa0cf43d88cc131659414faba.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

module.exports = {
    enviar: function (req, res) {
        var config = req.body.config;
        var dados = req.body.dados;

        var data = {
            from: dados.from,
            to: dados.to,
            subject: dados.subject
        };

        if (dados.html) {
            data.html= dados.html // html body
        } else {
            data.text= dados.text // plain text body}
        }

        if (dados.anexo[0]) {
            attachment: dados.anexo
        };

        mailgun.messages().send(data, function (error, body) {
            console.log(body);
        });
    }
}