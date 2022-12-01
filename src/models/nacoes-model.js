const { DataTypes, Model }=require('sequelize');

const { sequelizeCon } = require('../config/db-config');


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

;

module.exports={ Nacao };