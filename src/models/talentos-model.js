const { DataTypes, Model } = require('sequelize');
const { sequelizeCon } = require('../config/db-config');

class Talento extends Model {}

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


module.exports = { Talento };