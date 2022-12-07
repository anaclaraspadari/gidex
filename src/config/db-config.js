const { Sequelize } = require('sequelize');

const sequelizeCon = new Sequelize("postgresql://postgres:CRNaqriyP29ZFvmRgTsR@containers-us-west-91.railway.app:6071/railway", {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
})

//sequelizeCon.sync({ force: true });
module.exports = { sequelizeCon };