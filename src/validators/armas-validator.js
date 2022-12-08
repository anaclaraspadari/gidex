const Joi=require('joi');
const { Arma } = require('../models/armas-model');

const armaSchema=Joi.object({
    nome:Joi.string().required()
})

const getArmaSchema=Joi.object({
    id:Joi.number().required()
})

const getArmasSchema=Joi.object({
    limit:Joi.number(),
    offset:Joi.number()
})

const validateArma=async(arma)=>{
    const validacao=armaSchema.validate(arma, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const armaExiste=await Arma.findOne({where:{nome: arma.nome}});
    if(armaExiste){
        return {details:[{message:"Esta arma já existe"}]}
    }
}

const validateGetArma=async(arma)=>{
    const validacao=getArmaSchema.validate(arma,{
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const armaExiste=await Arma.findOne({where:{id: arma.id}});
    if(!armaExiste){
        return {details:[{message:"Esta arma não existe"}]}
    }
}

const validateGetArmas=async(arma)=>{
    const validacao = getArmasSchema.validate(arma, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
}

module.exports={validateArma, validateGetArma, validateGetArmas};