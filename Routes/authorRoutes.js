const express = require('express');
const router = express.Router();
const { getAllAuthors, createAuthor, getAuthorById, getBooksByAuthor } = require('../Controllers/authorController');


router.get('/', getAllAuthors);

router.get('/:id', getAuthorById);

router.get('/:authorId/books', getBooksByAuthor);

router.post('/', createAuthor);

module.exports = router;