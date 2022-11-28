const { DataTypes, Model }=require('sequelize');

const { sequelizeCon } = require('../config/db-config');
const { Personagem } = require('./personagens-model');

class Nacao extends Model{}

Nacao.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'nacaos',
    createdAt: false,
    updatedAt: false
});

Personagem.belongsTo(Nacao);
Nacao.hasMany(Personagem, {onDelete: 'CASCADE'});

module.exports={ Nacao }