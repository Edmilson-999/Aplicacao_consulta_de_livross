const express = require('express');
const sequelize = require('./Config/database');
const booksRoutes = require('./Routes/bookRoutes');
const authorRoutes = require('./Routes/authorRoutes');
const app = express();
const swaggerSetup = require('./swagger');


// Middlewares  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/Books', booksRoutes);
app.use('/Authors', authorRoutes);

swaggerSetup(app);

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
