const { Nacao } = require('../models/nacoes-model')
const { validateNacao, validateGetNacao, validateGetNacoes } = require('../validators/nacoes-validator');
const { Personagem } = require('../models/personagens-model');

class NacoesController {
    constructor() {}

    async create(req, res) {
        const nacoesBody = req.body;
        try {
            const invalido = await validateNacao(nacoesBody);
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }
            const ex = {
                nome: nacoesBody.nome
            }

            await Nacao.create(ex);
            return res.status(200).json(ex);

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }

    async detail(req, res) {
        try {
            const { id } = req.params;
            const invalido = await validateGetNacao({id});
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }
            const nacao = await Nacao.findByPk(id)
            res.status(200).json(nacao);
        } catch (err) {
            return res.status(400).json({ err });
        }
    }

    async listaNacoes(req, res) {
        const invalido = await validateGetNacoes(req.query)
        if (invalido) {
            throw {
                status: 400,
                message: invalido.details[0].message
            }
        }
        try {
            const nacoes = await Nacao.findAndCountAll({
                limit: 10,
                offset: 0
            })
            res.status(200).json(nacoes);
        } catch (err) {
            return res.status(400).json({ err });
        }
    }

    async listaPersonagemPorNacao(req, res) {
        try {
            const { id } = req.params;
            const invalido = await validateGetNacao({ id });
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }
            const personagens = await Personagem.findAndCountAll({
                where: {
                    nacaoId: id
                },
                include: [
                    { model: Nacao }
                ]
            })
            res.status(200).json(personagens);
        } catch (err) {
            return res.status(400).json({ err });
        }
    }
}

module.exports = NacoesController;