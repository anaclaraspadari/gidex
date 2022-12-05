const { Usuario } = require('../models/usuarios-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateUsuario, validateAuthUsuario, validateUpdateUsuario, validateGetListaUsuarios } = require('../validators/usuarios-validator');

class UsuariosController {

    constructor() {}

    async create(req, res) {

        const userBody = req.body;
        const senha = bcrypt.hashSync(userBody.senha, 10);

        try {

            const invalido = await validateUsuario(userBody);
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }
            const usuario = {
                email: userBody.email,
                nome: userBody.nome,
                senha,
                img: userBody.img
            }

            await Usuario.create(usuario);
            console.log(usuario);
            return res.status(200).json(usuario);

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }

    }

    async auth(req, res) {

        const { email, senha } = req.body;

        try {

            const invalido = await validateAuthUsuario({ email, senha });
            if (invalido) {
                throw {
                    status: 400,
                    message: invalido.details[0].message
                }
            }

            const user = await Usuario.findOne({
                where: {
                    email
                }
            });
            const verifica = bcrypt.compareSync(senha, user.senha);

            if (!verifica) {

                throw {
                    status: 401,
                    message: 'Senha invalida'
                }

            }

            // const meuJwt = jwt.sign(user.dataValues, 'SECRET NAO PODERIA ESTAR HARDCODED')
            // return res.status(200).json(meuJwt);

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }

    async list(req, res) {
        const users = await Usuario.findAndCountAll();
        res.json(users);
    }

    async profile(req, res) {
        res.json({ user: req.user });
    }
}


module.exports = UsuariosController;