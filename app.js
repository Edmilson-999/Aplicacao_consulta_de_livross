const express = require('express');
const sequelize = require('./Config/database');
const { Author, Book } = require('./Models');
const booksRoutes = require('./Routes/bookRoutes');
const authorRoutes = require('./Routes/authorRoutes');
const { where, json } = require('./Config/database');
const bookController = require('./Controllers/bookController');
const { createAuthor, getAllAuthors, getAuthorById } = require('./Controllers/authorController');
const { Op } = require('sequelize');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/Books', booksRoutes);
app.use('/Authors', authorRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Modelos sincronizados com a base de dados');
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch(err => {
        console.error('Erro ao sincronizar os modelos com a base de dados:', err);
    });
