const { Personagem, colecao } = require('../models/personagens-model');
const { Usuario } = require('../models/usuarios-model');
const { Arma } = require('../models/armas-model');
const { Elemento } = require('../models/elementos-model');
const { Nacao } = require('../models/nacoes-model');
const { Talento } = require('../models/talentos-model');

class ColecoesController{
    constructor(){}

    async insertPersonagemColecao(req, res){
        const {id_user}=req.user;
        const collBody=req.body;
        const ex={
            usuarioEmail: id_user,
            personagemId: collBody.personagemId
        }
        await colecao.create(ex);
        return res.status(200).json({ex});
    }

    async listColecaoDoUsuario(req, res){
        try{
            const colecaoUsuario=await colecao.findAll({
                where: {
                    usuarioEmail: req.params
                },
                include:[
                    {
                        model: Personagem,
                        through: {
                            attributes: [nome]
                        }
                    }
                ]
            });
            res.status(200).json(colecaoUsuario);
        }catch(err){
            return res.status(400).json({err});
        }
    }

    async deleteItemColecao(req, res){
        colecao.destroy({
            where:{
                usuarioEmail: req.user,
                personagemId: req.params.id_item
            }
        }).then(function(deleted){
            if(deleted===1){
                res.status(200).json({msg: "Personagem deletado da colecao"});
            }else{
                res.status(404).json({ msg: "Falha ao deletar" });
            }
        }).catch(err => {
            res.status(500).json("Nao foi possivel concluir a operacao");
        })
    }
}

module.exports=ColecoesController;