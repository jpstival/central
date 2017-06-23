var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var envio   = require('../services/nodemailer/sendMail-service');
    //envio.enviar();
    console.log('executou');
    res.send('respond with a email');
});

module.exports = router;