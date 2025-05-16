const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const verify = require('../utils/verifyToken');

router.get('/', verify, bookController.getBooks);
router.get('/:id', verify,  bookController.getBook);
router.post('/', verify, bookController.creatBook);
router.put('/:id', verify, bookController.updateBook);
router.delete('/:id', verify, bookController.deleteBook);



module.exports = router;