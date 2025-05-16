require('dotenv').config();
const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const app = express();


app.use(express.json());
app.use('/api/books', bookRoutes)


const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({message: 'Hello'});
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});