const { Personagem } = require('../models/personagens-model');
const { validatePersonagem, validateGetPersonagens } = require("../validators/personagens-validator");
const { validateGetArma } = require('../validators/armas-validator');
const { validateGetElemento } = require('../validators/elementos-validator');
const { validateGetNacao } = require('../validators/nacoes-validator');
const { validateGetTalento } = require('../validators/talentos-validator');
const { Arma } = require('../models/armas-model');
const { Elemento } = require('../models/elementos-model');
const { Nacao } = require('../models/nacoes-model');
const { Talento } = require('../models/talentos-model');


class ArmasController {
    constructor() {}

    async create(req, res) {

        const personagemBody = req.body;

        const ex = {
            nome: personagemBody.nome,
            raridade: personagemBody.raridade,
            constelacao: personagemBody.constelacao,
            aniversario: personagemBody.aniversario,
            armaId: personagemBody.armaId,
            elementoId: personagemBody.elementoId,
            nacaoId: personagemBody.nacaoId,
            talentoId: personagemBody.talentoId
        }

        const validaArma = await validateGetArma(ex.armaId);
        const validaElemento = await validateGetElemento(ex.elementoId);
        const validaNacao = await validateGetNacao(ex.nacaoId);
        const validaTalento = await validateGetTalento(ex.talentoId);

        if (!validaArma || !validaElemento || !validaNacao || !validaTalento) {
            return res.status(400).json({ msg: "Valor(es) invalido(s)" });
        }

        try {
            const invalido = await validatePersonagem(personagemBody);
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }

            await Personagem.create(ex);
            return res.status(200).json(ex);

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }

    async detail(req, res) {
        try {
            const { id } = req.params;
            /*const invalido = await validateGetPersonagem({ id });
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }*/
            const personagem = await Personagem.findByPk(id, {
                include: [
                    { model: Arma },
                    { model: Elemento },
                    { model: Nacao },
                    { model: Talento }
                ],
                limit: 10,
                offset: 0
            });
            res.status(200).json(personagem);
        } catch (err) {
            return res.status(400).json({ err });
        }
    }

    async listaPersonagens(req, res) {
        const invalido = await validateGetPersonagens(req.query)
        if (invalido) {
            throw {
                status: 400,
                message: invalido.details[0].message
            }
        }
        try {
            const personagens = await Personagem.findAndCountAll({
                include: [
                    { model: Arma },
                    { model: Elemento },
                    { model: Nacao },
                    { model: Talento }
                ],
                limit: 10,
                offset: 0
            })
            res.status(200).json(personagens);
        } catch (err) {
            return res.status(400).json({ err });
        }
    }


}

module.exports = ArmasController