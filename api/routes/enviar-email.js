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
    // var mailgun = require("mailgun-js");
    // var api_key = '';
    // var DOMAIN = '';
    // var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
    var filepath = './routes/xml.txt';
    var filepath1 = './routes/xml.txt';
    // var data = {
    //   from: '',
    //   to: '',
    //   subject: 'Hello',
    //   text: 'Testing some Mailgun awesomness!',
    //   html: "<html>HTML version of the body</html>"
    //   //attachment: [filepath, filepath1]
    // };
    // var body = req.body;
    // console.log(body);
    // var filename = body.anexo.filename;
    // console.log(filename);
    // var content = body.anexo.content;
    // console.log(content);
    // var base64Data = content.replace(/^data:image\/png;base64,/, "");
    // console.log(conbase64Datatent);
    // require("fs").writeFile(filename, base64Data, 'base64', function(err) {
    //   console.log(err);
    // });

    // mailgun.messages().send(data, function (error, body) {
    //   console.log(body);
    // });
    // res.send('respond with a email');

})

router.post('/', function(req, res, next) {
    // var body = req.body;
    // console.log(body);
    // var filename = body.dados.anexo.filename;
    // console.log(filename);
    // var content = body.dados.anexo.content;
    // console.log(content);
    // var base64Data = content.replace(/^data:image\/png;base64,/, "");
    // console.log(base64Data);
    // require("fs").writeFile(filename, base64Data, 'base64', function(err) {
    //   console.log(err);
    // });
    sendMailService.enviar(req, res);
})

module.exports = router;