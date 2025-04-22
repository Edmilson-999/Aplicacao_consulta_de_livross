const express = require('express');
const router = express.Router();
const { createBook, getBookById, getBooksByTitle, updateBook, getAllBooks, getBooksByAuthor } = require ('../Controllers/bookController');

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.get('/title/:title', getBooksByTitle);

router.get('/author/:authorId', getBooksByAuthor);

router.post('/', createBook);

router.put('/:id', updateBook);


module.exports = router;