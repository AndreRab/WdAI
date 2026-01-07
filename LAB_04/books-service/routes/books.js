const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const authenticate = require('../middleware/authenticate');

// GET /api/books - Returns list of all books
router.get('/', async (req, res) => {
    console.log('Invoke get all books')
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/books/:bookId - Returns details of a specific book
router.get('/:bookId', async (req, res) => {
    console.log('Invoke get book by id')
    try {
        const book = await Book.findByPk(req.params.bookId);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/books - Adds a new book and returns its id
router.post('/', authenticate, async (req, res) => {
    console.log('Invoke post book')
    try {
        const { title, author, year } = req.body;
        if (!title || !author || !year) {
            return res.status(400).json({ error: 'Title, author and year are required' });
        }
        const newBook = await Book.create({ title, author, year });
        res.status(201).json({ id: newBook.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/books/:bookId - Deletes a book by id
router.delete('/:bookId', authenticate, async (req, res) => {
    console.log('Invoke delete book')
    try {
        const result = await Book.destroy({
            where: { id: req.params.bookId }
        });
        if (result) {
            // res.status(204).send(); 
            // 204 No Content is standard, but sometimes explicit confirmation is nice.
            // I'll stick to 200/204.
            res.status(200).json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
