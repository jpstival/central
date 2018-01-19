const Comunicado = require('./../../../models').Comunicados;
const Anexo = require('./../../../models').Anexos;
const Destinatario = require('./../../../models').Destinatarios;

module.exports = {
    SalvaComunicado: function (req, res, id) {
        var config = req.body.config;
        var dados = req.body.dados;

        var texto = dados.text;
        var tipo = 'T';
        if (dados.html) {
            texto = dados.html
            tipo = 'H'
        };
        var possuiAnexo = false;
        if (dados.anexo[0]) {
            possuiAnexo = true
        };

        Comunicado.create({
            usuario_id: id,
            produto_id: config.produto,
            rem_email: config.email,
            rem_nome: dados.from,
            assunto: dados.subject,
            corpo: texto,
            tipo_corpo: tipo,
            retorno: false,
            carimbo: false,
            anexo: possuiAnexo
        })
        .then(function (comunicado) {
            dados.anexo.forEach(function (anexos) {
                return Anexo.create({
                    comunicado_id: comunicado.id,
                    nomearquivo: anexos.filename,
                    conteudo: anexos.content
                })
            });
            for (var dest in dados.to) {
                Destinatario.create({
                    comunicado_id: comunicado.id,
                    destinatario: dados.to[dest],
                    tipo: 'N'
                })
            };
            for (var dest in dados.cc) {
                Destinatario.create({
                    comunicado_id: comunicado.id,
                    destinatario: dados.cc[dest],
                    tipo: 'C'
                })
            };
            for (var dest in dados.bcc) {
                Destinatario.create({
                    comunicado_id: comunicado.id,
                    destinatario: dados.bcc[dest],
                    tipo: 'O'
                })
            }
            return res.send('<strong>Salvou comunicado.</strong>');
        })
        .catch(function (erro) {
            return res.send("Erro: " + erro);
        });
    }
}