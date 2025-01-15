require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'alumni_db',
    username: 'root',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,});

sequelize.authenticate()
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Connection error:', err));



module.exports = sequelize;
