const { DataTypes, Model } = require('sequelize');
const { Personagem } = require("./personagens-model");
const { sequelizeCon } = require('../config/db-config');


class Usuario extends Model {}

Usuario.init({
    // id:{
    //     type: DataTypes.STRING,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    img: DataTypes.STRING,
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize: sequelizeCon,
    schema: 'public',
    modelName: 'usuarios',
    createdAt: false,
    updatedAt: false
});

const Personagens_Usuarios = sequelizeCon.define('Personagens_Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    img: {
        type: DataTypes.STRING
    }
}, { timestamps: false });




//sequelizeCon.sync({ force: true });
module.exports = { Usuario, Personagens_Usuarios };