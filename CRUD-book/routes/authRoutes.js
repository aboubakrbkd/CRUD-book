const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/authController');


router.post('/login', authcontroller.login);
router.post('/signup', authcontroller.signup);

module.exports = router;