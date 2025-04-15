const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Author = require('./Author');

const BooK = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    isbn: {
        type: DataTypes.STRING,
        unique: true
    },

    publicationYear: {
        type: DataTypes.INTEGER,
    },

    authorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Author,
            key: 'id'
        }
    }
});

BooK.associate = function(models) {
    BooK.belongsTo(models.Author, { foreignKey: 'authorId' });
}

module.exports = BooK;