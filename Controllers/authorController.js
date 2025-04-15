const { Author, BooK } = require('../Models');
const sequelize = require('../Config/database');
const { Op } = require('sequelize');
const express = require('express');
const router = express.Router();
const { where, json } = require('../Config/database');


exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll({
            include: [Author]
        });
        res.json(authors);
    } catch(err) {
        res.status(500).json({ error: error.message })
    }
};

exports.getBooksByAuthor = async (req, res) => {
    try {
        const authorId = req.params.authorId;
        const books = await BooK.findAll({
            where: { authorId },
            include: [Author]
        });
        if (books.length === 0) {
            return res.status(404).json({ error: 'Books not found for this author' });
        }
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getAuthorById = async (req, res) => {
    try {
        const authorId = req.params.id;
        const author = await Author.findByPk(authorId, {
            include: [BooK]
        });
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }
        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.createAuthor = async (req, res) => {
    try {
        const { name } = req.body;
        const author = await Author.create({ name });
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = {
    getAllAuthors,
    getBooksByAuthor,
    getAuthorById,
    createAuthor
}
