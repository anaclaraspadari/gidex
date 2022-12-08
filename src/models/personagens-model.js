const { DataTypes, Model } = require('sequelize');
const { sequelizeCon } = require('../config/db-config');

class Personagem extends Model {}

Personagem.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING,
    raridade: DataTypes.STRING,
    constelacao: DataTypes.STRING,
    aniversario: DataTypes.STRING,
    foto: DataTypes.STRING
}, {
    sequelize: sequelizeCon,
    schema: 'public',
    modelName: 'personagem',
    createdAt: false,
    updatedAt: false
});

//const colecao = sequelizeCon.define('colecao', {}, { timestamps: false });


module.exports = { Personagem };