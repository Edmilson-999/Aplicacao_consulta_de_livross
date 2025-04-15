const { where, json } = require('../Config/database');
const sequelize = require('../Config/database');
const { Op } = require('sequelize');
const express = require('express');
const router = express.Router();
const { Author, BooK } = require('../Models');


exports.createBook = async (req, res) => {
    try {
        const { title, authorId } = req.body;
        const book = await BooK.create({ title, authorId });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getBooksByTitle = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}


exports.getAllBooks = async (req, res) => {
    try {
        const books = await BooK.findAll({
            include: [Author]
        });
        res.json(books);
    } catch(err) {
        res.status(500).json({ error: error.message })
    }
};


exports.getBooksByAuthor = async (req, res) => {
    try {
        const AuthorId = req.params.AuthorId;
        const books = await books.findAll({
            where: { authorId },
            include: [Author]    
        })
        res.json(books);
    } catch (error) {
        res.status(500).json({ err: error.message })
    }
}

exports.getBookById = async (req, res) => {
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

exports.updateBook = async (req, res) => {
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

module.exports = bookController;

