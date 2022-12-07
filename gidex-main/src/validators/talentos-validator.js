const Joi=require('joi');
const { Talento } = require('../models/talentos-model');

const talentoSchema=Joi.object({
    nome:Joi.string().required()
})

const getTalentoSchema=Joi.object({
    id:Joi.number().required()
})

const getTalentosSchema=Joi.object({
    limit:Joi.number(),
    offset:Joi.number()
})

const validateTalento=async(talento)=>{
    const validacao=talentoSchema.validate(talento, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const talentoExiste=await Talento.findOne({where:{nome: talento.nome}});
    if(talentoExiste){
        return {details:[{message:"Este talento já existe"}]}
    }
}

const validateGetTalento=async(talento)=>{
    const validacao=getTalentoSchema.validate(talento,{
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
    const talentoExiste=await Talento.findByPk(talento);
    if(!talentoExiste){
        return {details:[{message:"Este talento não existe"}]}
    }
}

const validateGetTalentos=async(talento)=>{
    const validacao = getTalentosSchema.validate(talento, {
        abortEarly: false
    });
    if (validacao.error) {
        return validacao.error;
    }
}

module.exports={validateTalento, validateGetTalento, validateGetTalentos};