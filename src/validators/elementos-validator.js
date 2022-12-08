const Joi=require('joi');
const { Elemento } = require('../models/elementos-model');

const elementoSchema=Joi.object({
    nome:Joi.string().required()
})

const getElementoSchema=Joi.object({
    id:Joi.number().required()
})

const getElementosSchema=Joi.object({
    limit:Joi.number(),
    offset:Joi.number()
})

const validateElemento=async(elemento)=>{
    const validacao=elementoSchema.validate(elemento, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const elementoExiste=await Elemento.findOne({where:{nome: elemento.nome}});
    if(elementoExiste){
        return {details:[{message:"Esta elemento já existe"}]}
    }
}

const validateGetElemento=async(elemento)=>{
    const validacao=getElementoSchema.validate(elemento,{
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const elementoExiste=await Elemento.findOne({where:{id: elemento.id}});
    if(!elementoExiste){
        return {details:[{message:"Este elemento não existe"}]}
    }
}

const validateGetElementos=async(elemento)=>{
    const validacao = getElementosSchema.validate(elemento, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
}

module.exports={validateElemento, validateGetElemento, validateGetElementos};