const { DataTypes, Model }=require('sequelize');

const { sequelizeCon } = require('../config/db-config');
const { Personagem } = require('./personagens-model');

class Talento extends Model{}

Talento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'talentos',
    createdAt: false,
    updatedAt: false
});

Personagem.belongsTo(Talento);
Talento.hasMany(Personagem, {onDelete: 'CASCADE'});

module.exports={ Talento }