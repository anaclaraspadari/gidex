const Joi=require('joi');
const { Personagem } = require('../models/personagens-model');

const personagemSchema=Joi.object({
    nome:Joi.string().required(),
    raridade:Joi.string().required(),
    constelacao:Joi.string().required(),
    aniversario:Joi.string().required(),
    armaId:Joi.number().required(),
    elementoId:Joi.number().required(),
    nacaoId:Joi.number().required(),
    talentoId:Joi.number().required(),
})

const getPersonagemSchema=Joi.object({
    id:Joi.number().required()
})

const getPersonagensSchema=Joi.object({
    limit:Joi.number(),
    offset:Joi.number()
})

const validatePersonagem=async(personagem)=>{
    const validacao=personagemSchema.validate(personagem, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }

    const personagemExiste=await Personagem.findOne({where:{nome: personagem.nome}});
    if(personagemExiste){
        return {details:[{message:"Este personagem já existe"}]}
    }
}

const validateGetPersonagem=async(personagem)=>{
    const validacao=getPersonagemSchema.validate(personagem,{
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const personagemExiste=await Personagem.findByPk(personagem);
    if(!personagemExiste){
        return {details:[{message:"Este personagem não existe"}]}
    }
}

const validateGetPersonagens=async(personagem)=>{
    const validacao = getPersonagensSchema.validate(personagem, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
}

module.exports={validatePersonagem, validateGetPersonagem, validateGetPersonagens};