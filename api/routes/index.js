var express = require('express');
//var nodemail = require('nodemailer')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   const nodemailer = require('nodemailer');

var toPdf = require("office-to-pdf")
 
// create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true, // secure:true for port 465, secure:false for port 587
//       auth: {
//           user: 'joaopaulosstival@gmail.com',
//           pass: '986stival'
//       }
//   });


//     // var mammoth = require("mammoth");
 
//     // mammoth.convertToHtml({path: "./DIFACT.docx"})
//     // .then(function(result){
//     //     var html = result.value; // The generated HTML 
//     //     //console.log(html);
//     //    var messages = result.messages; // Any messages, such as warnings during conversion 

//     // var docxConverter = require('docx-pdf');
    
//     // docxConverter('./DIFACT.docx','./DIFACT.pdf',function(err,result){
//     // if(err){
//     //     console.log(err);
//     // }
//     // console.log('result'+result);
//     // });
//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: '"Fred Foo 👻" <joaopaulosstival@live.com>', // sender address
//       to: 'joaopaulosstival@gmail.com', // list of receivers
//       subject: 'Hello ✔', // Subject line
//       text: 'Hello world ?' // plain text body
//       //html: '<b>Hello world ?</b>' // html body
//           //attachments: [
//             // {   // binary buffer as an attachment
//             //     filename: 'text2.txt',
//             //     content: new Buffer('hello world!','utf-8')
//             // },
//             // {   // file on disk as an attachment
//             //     filename: 'difact.pdf',
//             //     path: 'DIFACT.pdf' // stream this file
//             // },
//             // {   // filename and content type is derived from path
//             //     path: '/path/to/file.txt'
//             //},
//             // {   // stream as an attachment
//             //     filename: 'text4.txt',
//             //     content: fs.createReadStream('file.txt')
//             // },
//             // {   // define custom content type for the attachment
//             //     filename: 'text.bin',
//             //     content: 'hello world!',
//             //     contentType: 'text/plain'
//             // },
//             // {   // define custom content type for the attachment
//             //     filename: 'text.html',
//             //     content: html,
//             //     contentType: 'text/html'
//             // },
//             // {   // use URL as an attachment
//             //     filename: 'license.txt',
//             //     path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
//             // },
//             // {   // encoded string as an attachment
//             //     filename: 'text1.txt',
//             //     content: 'aGVsbG8gd29ybGQh',
//             //     encoding: 'base64'
//             // },
//        // ]
//   };

  // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message %s sent: %s', info.messageId, info.response);
//   });
  res.render('index', { title: 'Express' });
//   })
// .done();
});

module.exports = router;
