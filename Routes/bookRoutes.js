const express = require('express');
const router = express.Router();
const bookController = require('./Controllers/bookController');
const { Book } = require('../Models');
const { Author } = require('../Models');
const sequelize = require('../Config/database');
const { Op } = require('sequelize');
const { where, json } = require('../Config/database');


router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBookById);

router.get('/title/:title', bookController.getBooksByTitle);

router.get('/author/:authorId', bookController.getBooksByAuthor);

router.post('/', bookController.createBook);

router.put('/:id', bookController.updateBook);


module.exports = router;