const express = require('express');
const { Author, BooK } = require('../Models');


const createBook = async (req, res) => {
    try {
        const { title, authorId } = req.body;
        const book = await BooK.create({ title, authorId });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getBooksByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        const books = await BooK.findAll({
            where: {
                title: {
                    [Op.like]: `%${title}%`
                }
            },
            include: [Author]
        });
        if (books.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await BooK.findAll({
            include: [Author]
        });
        res.json(books);
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

const getBooksByAuthor = async (req, res) => {
    try {
        const authorId = req.params.AuthorId; // Corrigi para usar authorId consistente
        const books = await BooK.findAll({ // Corrigi de 'books' para 'BooK'
            where: { authorId },
            include: [Author]    
        })
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message }) // Corrigi de 'err' para 'error'
    }
}

const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await BooK.findByPk(bookId, {
            include: [Author]
        });
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const { title, authorId } = req.body;
        const book = await BooK.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        book.title = title;
        book.authorId = authorId;
        await book.save();
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createBook,
    getBookById,
    getBooksByTitle,
    updateBook,
    getAllBooks,
    getBooksByAuthor
};