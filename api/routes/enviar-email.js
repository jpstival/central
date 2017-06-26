var express = require('express');
var router  = express.Router();
var sendMailService   = require('../services/nodemailer/sendMail-service');

/* GET home page. */
router.get('/', function(req, res, next) {
    config = {
        smtp: 'smtp.gmail.com', 
        port: 465,
        secure: true, 
        email: 'joaopaulosstival@gmail.com',
        senha: '986jpstv',
        from: 'joaopaulosstival@live.com',
        to: 'joaopaulosstival@gmail.com', 
        subject: 'olá mundo',
        text: 'fala ai mano',
        html: '<b>Hello world ?</b>'
    }
    console.log(config);
    sendMailService.enviar(config);
    console.log('executou');
    res.send('respond with a email');

})

module.exports = router;