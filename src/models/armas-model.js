const { DataTypes, Model }=require('sequelize');

const { sequelizeCon } = require('../config/db-config');
const { Personagem } = require('./personagens-model');

class Arma extends Model {}

Arma.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'armas',
    createdAt: false,
    updatedAt: false
})

Personagem.belongsTo(Arma);
Arma.hasMany(Personagem, {onDelete: 'CASCADE'});

module.exports={ Arma };