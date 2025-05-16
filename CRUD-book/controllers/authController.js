const authDB = require('../models/authDb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password)
        return res.status(400).json({message: "username and password are empty"});
    try {
        const [result] = await authDB.query(
            'SELECT * FROM users WHERE username = ?',
            [username]);
        if (result.length === 0)
            return res.status(400).json({message: "username or password are incorrect"});
        const passwordMatch = await  bcrypt.compare(password, result[0].password);
        if (!passwordMatch)
            return res.status(400).json({message: "username or password are  incorrect"});
        const accesToken = jwt.sign({username: result[0].username}, process.env.JWT_SECRET, {expiresIn: '15m'});
        const refreshToken = jwt.sign({username: result[0].username}, process.env.JWT_REFRESH, {expiresIn: '7d'});
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.status(200).json({message: "Login successful", accesToken});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal server Error"});
    }
}

exports.signup = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password)
        return res.status(400).json({message: "username and password are empty"});
    try {
        const [result] = await authDB.query(
            'SELECT * FROM users WHERE username = ?',
            [username],
        );
        if (result.length > 0)
            return res.status(400).json({message: "username already in use"});
        const hashedPassword = await bcrypt.hash(password, 10);
        await authDB.query(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, hashedPassword],
        );
        res.status(200).json({message: "User created succefully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}