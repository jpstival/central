var express = require('express');
var router  = express.Router();
var sendMailService   = require('../services/nodemailer/sendMail-service');

/* GET home page. */
router.get('/', function(req, res, next) {

    // config = {
    //     host: 'smtp.gmail.com', 
    //     port: 465,
    //     secure: false, 
    //     email: 'xxxxxxxxxxxxxxxxxm',
    //     senha: 'xxxxxxx'
    // }

    // dados = {
    //     from: 'xxxxxxxxxxxxxxx',
    //     to: 'xxxxxxxxxxxxxxxxx', 
    //     subject: 'olá mundo',
    //     text: 'fala ai mano',
    //     html: '<b>Hello world ?</b>'
    // }

    // sendMailService.enviar(config, dados);
    var mailgun = require("mailgun-js");
    var api_key = 'key-e3b911b1589acfd0c76bac958ea2edee';
    var DOMAIN = 'sandboxc5906c1aa0cf43d88cc131659414faba.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
    
    var data = {
      from: 'Excited User <joaopaulosstival@gmail.com>',
      to: 'joaopaulo@decisaosistemas.com.br',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!',
      html: "<html>HTML version of the body</html>"
    };
    
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });
    res.send('respond with a email');

})

router.post('/', function(req, res, next) {

    
    //var requisicao = req.body; 
    //var config = requisicao.config;
    //var dados = requisicao.dados;

    sendMailService.enviar(req, res);
})

module.exports = router;