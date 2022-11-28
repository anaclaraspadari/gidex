const Joi=require("joi");
const { Personagem, colecao }=require('../models/personagens-model');

addPersonagemColecaoSchema=Joi.object({
    personagemId: Joi.number().required()
});

getColecaoSchema=Joi.object({
    limit: Joi.number(),
    offset: Joi.number()
});

const validateAddPersonagemColecao=async(body)=>{
    const validacao=addPersonagemColecaoSchema.validate({
        abortEarly: false
    });
    if(validacao.error){
        return validacao.error
    }
    const personagemExiste=await Personagem.findByPk(body.personagemId);
    if(!personagemExiste){
        return {details:[{message:"Este personagem não existe"}]}
    }
    const personagemAdicionado=await colecao.findOne({where: {personagemId: body.personagemId}});
    if(personagemAdicionado){
        return {details:[{message:"Este personagem já foi adicionado"}]}
    }
}

const validateGetColecao=async(query)=>{
    const validacao=getColecaoSchema.validate({
        abortEarly: false
    });
    if(validacao.error){
        return validacao.error
    }
}