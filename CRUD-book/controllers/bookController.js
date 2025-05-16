const db = require('../models/db');

// GET all books
exports.getBooks = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM books');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get books' });
  }
};

// GET single book
exports.getBook = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [id]);
    if (rows.length === 0)
      return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get book' });
  }
};

// CREATE a book
exports.creatBook = async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) 
    return res.status(400).json({ message: 'Title and author are required' });
  try {
    await db.query('INSERT INTO books (title, author) VALUES (?, ?)', [title, author]);
    res.status(201).json({ message: 'Book created' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create book' });
  }
};

// UPDATE a book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  if (!title || !author)
    return res.status(400).json({ message: 'Title and author are required' });
  try {
    const [result] = await db.query('UPDATE books SET title = ?, author = ? WHERE id = ?', [title, author, id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update book' });
  }
};

// DELETE a book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM books WHERE id = ?', [id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};
