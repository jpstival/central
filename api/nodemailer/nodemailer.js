'use strict';
const nodemailer = require('nodemailer');

function enviarEmail(smtp, porta, seguranca, usuario, senha, destinatario, assunto, texto, anexo) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: smtp,
        port: porta,
        secure: seguranca, // secure:true for port 465, secure:false for port 587
        auth: {
            user: usuario,
            pass: senha
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <joaopaulosstival@gmail.com>', // sender address
        to: destinatario, // list of receivers
        subject: assunto, // Subject line
        text: texto, // plain text body
        //html: '<b>Hello world ?</b>', // html body
        attachments: [
                // {   // binary buffer as an attachment
                //     filename: 'text2.txt',
                //     content: new Buffer('hello world!','utf-8')
                // },
                // {   // file on disk as an attachment
                //     filename: 'difact.pdf',
                //     path: 'DIFACT.pdf' // stream this file
                // },
                // {   // filename and content type is derived from path
                //     path: '/path/to/file.txt'
                //},
                // {   // stream as an attachment
                //     filename: 'text4.txt',
                //     content: fs.createReadStream('file.txt')
                // },
                // {   // define custom content type for the attachment
                //     filename: 'text.bin',
                //     content: 'hello world!',
                //     contentType: 'text/plain'
                // },
                {   // define custom content type for the attachment
                    filename: 'text.html',
                    content: anexo,
                    contentType: 'text/html'
                },
                // {   // use URL as an attachment
                //     filename: 'license.txt',
                //     path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                // },
                // {   // encoded string as an attachment
                //     filename: 'text1.txt',
                //     content: 'aGVsbG8gd29ybGQh',
                //     encoding: 'base64'
                // },
            ]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};

module.exports