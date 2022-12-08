const { Usuario, Personagem_Usuario } = require('../models/usuarios-model');
const { Estrela } = require('../models/estrelas-model');

class EstrelasController{
    constructor(){}


    async favoritarItem(req, res){
        try{
            const starBody=req.body;
            const ex={
                usuarioEmail: starBody.usuarioEmail,
                PersonagemUsuarioId: starBody.PersonagemUsuarioId
            }
            console.log(ex);
            await Estrela.create(ex);
            return res.status(200).json(ex);
        }catch(err){
            return res.status(500).json({ msg: err.message });
        }
    }

    async desfavoritarItem(req, res){
        Estrela.destroy({
            where:{
                id: req.params.id
            }
        }).then(function(deleted){
            if(deleted===1){
                res.status(200).json({msg: "Item removido dos favoritos"});
            }else{
                res.status(404).json({ msg: "Falha ao deletar" });
            }
        }).catch(err => {
            res.status(500).json("Nao foi possivel concluir a operacao");
        })
    }
}

module.exports=EstrelasController;