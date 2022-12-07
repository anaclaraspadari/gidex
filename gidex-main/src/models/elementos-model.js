const { DataTypes, Model } = require('sequelize');
const { sequelizeCon } = require('../config/db-config');

class Elemento extends Model {}

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

module.exports = { Elemento };