var express = require('express');
var router  = express.Router();
var sendMailService   = require('../services/nodemailer/sendMail-service');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.body);
    config = {
        host: 'smtp.gmail.com', 
        port: 465,
        secure: true, 
        email: 'joaopaulosstival@gmail.com',
        senha: '986stival'
    }

    dados = {
        from: 'joaopaulosstival@live.com',
        to: 'joaopaulosstival@gmail.com', 
        subject: 'olá mundo',
        text: 'fala ai mano',
        html: '<b>Hello world ?</b>'
    }

    sendMailService.enviar(config, dados);
    res.send('respond with a email');

})

router.post('/', function(req, res, next) {

    config = req.header('config');
    console.log('entrou');
    console.log(config);
    dados = req.header('dados');
    console.log(dados);
    // &config = '{'
    // &config += "host: 'smtp.gmail.com', "
    // &config += 'port: 465, '
    // &config += 'secure: true, '
    // &config += "email: 'joaopaulosstival@gmail.com', "
    // &config += "senha: '986stival' "
    // &config += '}'

    // &dados = '{'
    // &dados += "from: 'joaopaulosstival@live.com', "
    // &dados += "to: 'joaopaulosstival@gmail.com', "
    // &dados += "subject: 'olá mundo', "
    // &dados += "text: 'fala ai mano', "
    // &dados += "html: '<b>Hello world ?</b>' "
    // &dados += '}'

    sendMailService.enviar(config, dados);
    res.send('respond with a email');

})

module.exports = router;