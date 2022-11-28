const { Arma } = require('../models/armas-model')
const {validateArma, validateGetArma, validateGetArmas}=require('../validators/armas-validator');
const { Personagem } = require('../models/personagens-model');

class ArmasController{
    constructor(){}

    async create(req, res) {

        const armasBody=req.body;
        try{
            const invalido=await validateArma(armasBody);
            if(invalido){
                throw{
                    status:400,
                    message:invalido.details[0].message
                }
            }            
            const ex={
                nome: armasBody.nome
            }

            await Arma.create(ex);
            return res.status(200).json(ex);

        }catch(err){
            return res.status(500).json({msg: err.message});
        }
    }

    async detail(req, res){
        try{
            const {id}=req.params;
            const invalido=await validateGetArma({id});
            if(invalido){
                throw{
                    status:400,
                    message:invalido.details[0].message
                }
            }
            const arma=await Arma.findOne({
                where:{
                    id: id
                }
            })
            res.status(200).json(arma);
        }catch(err){
            return res.status(400).json({err});
        }
    }

    async listaArmas(req, res){
        const invalido=await validateGetArmas(req.query)
        if(invalido){
            throw{
                status:400,
                message:invalido.details[0].message
            }
        }
        try{
            const armas=await Arma.findAndCountAll({
                limit: 10,
                offset:0
            })
            res.status(200).json(armas);
        }catch(err){
            return res.status(400).json({err});
        }
    }

    async listaPersonagemPorArma(req, res){
        try{
            const {id}=req.params;
            const invalido=await validateGetArma({id});
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
                    { model: Arma }
                ]
            })
            res.status(200).json(personagens);
        }catch(err){
            return res.status(400).json({err});
        }
    }
}

module.exports=ArmasController