import {Sequelize} from "sequelize";

const db = new Sequelize('prak_tcc','root','',{
    host: '34.128.124.151',
    dialect: 'mysql'
});

export default db;