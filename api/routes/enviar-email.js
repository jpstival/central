var express = require('express');
var router  = express.Router();
var sendMailService   = require('../services/nodemailer/sendMail-service');

/* GET home page. */
router.get('/', function(req, res, next) {

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

    // sendMailService.enviar(config, dados);
    res.send('respond with a email');

})

router.post('/', function(req, res, next) {

// {
// 	"config": {
// 		"host": "smtp.gmail.com",
// 		"port": "465",
// 		"secure": "true",
// 		"email": "joaopaulosstival@gmail.com",
// 		"senha": "986stival"
// 	},
// 	"dados": {
// 		"from": "joaopaulosstival@live.com",
// 		"to": "joaopaulosstival@gmail.com",
// 		"subject": "olá mundo",
// 		"text": "fala ai mano",
// 		"html": "<b>Hello world ?</b>"
// 	}
// }
    requisicao = req.body; 
    console.log(requisicao);
    // config = requisicao.config;
    // console.log(config);
    // dados = requisicao.dados;
    // console.log(dados);

    // sendMailService.enviar(config, dados);
    res.send('respond with a email');

})

module.exports = router;