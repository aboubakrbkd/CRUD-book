require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use('/api/books', bookRoutes);
app.use('/', authRoutes);


const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});