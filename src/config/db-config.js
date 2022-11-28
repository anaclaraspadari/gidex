const {Sequelize}=require('sequelize');

const sequelizeCon=new Sequelize('postgresql://postgres:sVMBUxzlIYerzlOmVUnD@containers-us-west-83.railway.app:6484/railway',{
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
})

//sequelizeCon.sync({ force: true });
module.exports = { sequelizeCon };
