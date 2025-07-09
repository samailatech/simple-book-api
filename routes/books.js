const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' }
];

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// POST a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// DELETE a book
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  res.json({ message: `Book ${id} deleted` });
});

module.exports = router;
