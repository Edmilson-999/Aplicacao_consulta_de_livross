const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('DB_NAME', 'DB_USER', 'DB_PASS', {
    host: 'localhost',
    port: 3000,
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
    define: {
        timestamps: true,
        underscored: true
    }
});


module.exports = sequelize;