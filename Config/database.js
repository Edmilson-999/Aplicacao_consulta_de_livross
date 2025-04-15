const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('DB_NAME', 'DB_USER', 'DB_PASS', {
    host: 'localhost',
    port: 3000,
    dialect: 'mysql'
});

module.exports = sequelize;