const { Elemento } = require('../models/elementos-model')
const { validateElemento, validateGetElementos, validateGetElemento } = require('../validators/elementos-validator');
const { Personagem } = require('../models/personagens-model');

class ElementosController {
    constructor() {}

    async create(req, res) {

        const elementosBody = req.body;
        try {
            const invalido = await validateElemento(elementosBody);
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }
            const ex = {
                nome: elementosBody.nome
            }

            await Elemento.create(ex);
            return res.status(200).json(ex);

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }

    async detail(req, res) {
        try {
            const { id } = req.params;
            const invalido = await validateGetElemento({ id });
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }
            const elemento = await Elemento.findByPk(id)
            res.status(200).json(elemento);
        } catch (err) {
            return res.status(400).json({ err });
        }
    }

    async listaElementos(req, res) {
        const invalido = await validateGetElementos(req.query)
        if (invalido) {
            throw {
                status: 400,
                message: invalido.details[0].message
            }
        }
        try {
            const elementos = await Elemento.findAndCountAll({
                limit: 10,
                offset: 0
            })
            res.status(200).json(elementos);
        } catch (err) {
            return res.status(400).json({ err });
        }
    }

    async listaPersonagemPorElemento(req, res) {
        try {
            const { id } = req.params;
            const invalido = await validateGetElemento({ id });
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }
            const personagens = await Personagem.findAndCountAll({
                where: {
                    elementoId: id
                },
                include: [
                    { model: Elemento }
                ]
            })
            res.status(200).json(personagens);
        } catch (err) {
            return res.status(400).json({ err });
        }
    }
}

module.exports = ElementosController