const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../Config/database');


const Author = sequelize.define('Author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    bio: {
        type: DataTypes.TEXT
    }
});

Author.associate = function(models) {
    Author.hasMany(models.BooK, { foreignKey: 'authorId' });
}

module.exports = Author;