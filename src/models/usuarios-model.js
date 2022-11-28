const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');

class Usuario extends Model {}
    
Usuario.init({
    // id:{
    //     type: DataTypes.STRING,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    img: DataTypes.STRING,
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
    }
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'usuarios',
    createdAt: false,
    updatedAt: false
});



// sequelizeCon.sync({ force: true });
module.exports = { Usuario };