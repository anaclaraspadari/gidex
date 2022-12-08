const jwt = require('jsonwebtoken')

const { Usuario } = require('../models/usuarios-model')

const isAuth  = async(req, res, next) => {
    
    // verifica se token existe
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({msg:  "missing authorization token"}); 
    }

    console.log(token)

    // validar o token
    try{

        const tokenValidado = jwt.verify(token, 'SECRET NAO PODERIA ESTAR HARDCODED K');

    } catch(err) {
        console.log(err)
        return res.status(401).json({msg:  "token invalido"}); 
    }

    const tokenValidado = jwt.verify(token, 'SECRET NAO PODERIA ESTAR HARDCODED K');

    const user = await Usuario.findByPk(tokenValidado, {
        attributes: ['email','nome', "senha", 'img']
    });

    if(!user) return res.status(401).json({msg:  "Usuario não encontrado"}); 

    res.locals.user = user;
  
    next();
}

module.exports = { isAuth };