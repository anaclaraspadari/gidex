const { DataTypes, Model }=require('sequelize');

const { sequelizeCon } = require('../config/db-config');


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


module.exports={ Arma };