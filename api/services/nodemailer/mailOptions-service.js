'use strict';

// function opcoes(){
//     this.comAnexo = comAnexo;
//     this.semAnexo = semAnexo;

//     return this;
// };

// function comAnexo(){
//     // setup email data with unicode symbols
//   let mailOptions = {
//       from: '"Fred Foo 👻" <joaopaulosstival@live.com>', // sender address
//       to: 'joaopaulo@decisaosistemas.com.br, joaopaulosstival@gmail.com', // list of receivers
//       subject: 'Hello ✔', // Subject line
//       text: 'Hello world ?', // plain text body
//       html: '<b>Hello world ?</b>', // html body
//           attachments: [
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
//             {   // define custom content type for the attachment
//                 filename: 'text.html',
//                 content: html,
//                 contentType: 'text/html'
//             },
//             // {   // use URL as an attachment
//             //     filename: 'license.txt',
//             //     path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
//             // },
//             // {   // encoded string as an attachment
//             //     filename: 'text1.txt',
//             //     content: 'aGVsbG8gd29ybGQh',
//             //     encoding: 'base64'
//             // },
//         ]
//   };
// };

console.log('entrou semAnexo');

function semAnexo(){
    // setup email data with unicode symbols
  let mailOptions = {
      from: '"Fred Foo 👻" <joaopaulosstival@live.com>', // sender address
      to: 'joaopaulo@decisaosistemas.com.br, joaopaulosstival@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world ?', // plain text body
      html: '<b>Hello world ?</b>' // html body
  };
  console.log(mailOptions);
  return mailOptions;
};

module.exports = semAnexo();
//module.exports = opcoes();