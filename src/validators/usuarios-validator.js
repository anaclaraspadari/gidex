const Joi=require('joi');
const { Usuario } = require('../models/usuarios-model');

const usuarioSchema=Joi.object({
    email: Joi.string().email().required(),
    nome: Joi.string().min(3).max(30).required(),
    senha: Joi.string().pattern(new RegExp('^[a-z]')).required()
});

const authUsuarioSchema=Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
});

const updateUsuarioSchema=Joi.object({
    nome: Joi.string().min(3).max(50).required(),
    senha: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
});

const getListaUsuariosSchema=Joi.object({
    limit: Joi.number(),
    offset: Joi.number()
});

const validateUsuario=async(usuario)=>{
    const validacao=usuarioSchema.validate(usuario, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const usuarioExiste=await Usuario.findOne({where:{email:usuario.email,ativo:true}});
    if(usuarioExiste){
        return {details:[{message:"Usuário já existe"}]}
    }
}

const validateAuthUsuario=async(usuario)=>{
    const validacao=authUsuarioSchema.validate(usuario, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const usuarioExiste=await Usuario.findOne({where:{email:usuario.email,ativo:true}});
    if(!usuarioExiste){
        return {details:[{message:"Usuário inexistente"}]}
    }
}

const validateUpdateUsuario=async(usuario, email)=>{
    const validacao=updateUsuarioSchema.validate(usuario, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const usuarioExiste=await Usuario.findOne({where:{email,ativo:true}});
    if(!usuarioExiste){
        return {details:[{message:"Usuário inexistente"}]}
    }
}

const validateGetListaUsuarios=async(usuario)=>{
    const validacao = getListaUsuariosSchema.validate(usuario, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
}

module.exports={validateUsuario, validateAuthUsuario, validateUpdateUsuario, validateGetListaUsuarios}
