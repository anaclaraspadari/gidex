const { DataTypes, Model }=require('sequelize');

const { sequelizeCon } = require('../config/db-config');

const { Usuario }=require('./usuarios-model');

class Personagem extends Model{}

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
    modelName: 'personagems',
    createdAt: false,
    updatedAt: false
});

const colecao=sequelizeCon.define('colecao',{},{timestamps:false});

Personagem.belongsToMany(Usuario, {through: colecao}, {onDelete: 'CASCADE'});
Usuario.belongsToMany(Personagem, {through: colecao}, {onDelete: 'CASCADE'});

module.exports={ Personagem }