const { Talento } = require('../models/talentos-model')
const {validateTalento, validateGetTalento, validateGetTalentos}=require('../validators/talentos-validator');
const { Personagem } = require('../models/personagens-model');

class TalentosController{
    constructor(){}

    async create(req, res) {
        const talentosBody=req.body;
        try{
            const invalido=await validateTalento(talentosBody);
            if(invalido){
                throw{
                    status:400,
                    message:invalido.details[0].message
                }
            }
            const ex={
                nome: talentosBody.nome
            }

            await Talento.create(ex);
            return res.status(200).json(ex);

        }catch(err){
            return res.status(500).json({msg: err.message});
        }
    }

    async detail(req, res){
        try{
            const {id}=req.params;
            // const invalido=await validateGetTalento({id});
            // if(invalido){
            //     throw{
            //         status:400,
            //         message:invalido.details[0].message
            //     }
            // }
            const talento=await Talento.findOne({
                where:{
                    id: id
                }
            })
            res.status(200).json(talento);
        }catch(err){
            return res.status(400).json({err});
        }
    }

    async listaTalentos(req, res){
        const invalido=await validateGetTalentos(req.query)
        if(invalido){
            throw{
                status:400,
                message:invalido.details[0].message
            }
        }
        try{
            const talentos=await Talento.findAndCountAll({
                limit: 10,
                offset:0
            })
            res.status(200).json(talentos);
        }catch(err){
            return res.status(400).json({err});
        }
    }

    async listaPersonagemPorTalento(req, res){
        try{
            const {id}=req.params;
            const invalido=await validateGetTalento({id});
            if(invalido){
                throw{
                    status:400,
                    message:invalido.details[0].message
                }
            }
            const personagens=await Personagem.findAndCountAll({
                where:{
                    id: id
                },
                include:[
                    { model: Talento }
                ]
            })
            res.status(200).json(personagens);
        }catch(err){
            return res.status(400).json({err});
        }
    }
}

module.exports=TalentosController