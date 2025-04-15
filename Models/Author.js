const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const BooK = require('./Book');


const Author = sequelize.define('Author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
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