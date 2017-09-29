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
    res.send('respond with a email');

})

router.post('/', function(req, res, next) {

    var requisicao = req.body; 
    var config = requisicao.config;
    var dados = requisicao.dados;

    console.log(anexo);
    sendMailService.enviar(config, dados, res);

    //res.send('respond with a email');
    
})

module.exports = router;