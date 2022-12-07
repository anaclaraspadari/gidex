const Joi=require('joi');
const { Nacao } = require('../models/nacoes-model');

const nacaoSchema=Joi.object({
    nome:Joi.string().required()
})

const getNacaoSchema=Joi.object({
    id:Joi.number().required()
})


const getNacoesSchema=Joi.object({
    limit:Joi.number(),
    offset:Joi.number()
})

const validateNacao=async(nacao)=>{
    const validacao=nacaoSchema.validate(nacao, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const nacaoExiste=await Nacao.findOne({where:{nome: nacao.nome}});
    if(nacaoExiste){
        return {details:[{message:"Esta nacao já existe"}]}
    }
}

const validateGetNacao=async(nacao)=>{
    const validacao=getNacaoSchema.validate(nacao,{
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const nacaoExiste=await Nacao.findByPk(nacao);
    if(!nacaoExiste){
        return {details:[{message:"Esta nacao não existe"}]}
    }
}

const validateGetNacoes=async(nacao)=>{
    const validacao = getNacoesSchema.validate(nacao, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
}

module.exports={validateNacao, validateGetNacao, validateGetNacoes};