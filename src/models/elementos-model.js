const { DataTypes, Model }=require('sequelize');

const { sequelizeCon } = require('../config/db-config');
const { Personagem } = require('./personagens-model');

class Elemento extends Model{}

Elemento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'elementos',
    createdAt: false,
    updatedAt: false
});

Personagem.belongsTo(Elemento);
Elemento.hasMany(Personagem, {onDelete: 'CASCADE'});

module.exports={ Elemento }