const { DataTypes, Model } = require('sequelize');
const { sequelizeCon } = require('../config/db-config');

class Estrela extends Model {}

Estrela.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    sequelize: sequelizeCon,
    schema: 'public',
    modelName: 'estrela',
    createdAt: false,
    updatedAt: false
});

module.exports = { Estrela };