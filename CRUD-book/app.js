require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

const corsOption = {
    origin: 'http://localhost:5173',
    Credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use('/api/books', bookRoutes);
app.use('/', authRoutes);


const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});


//authorization and role permessions (admin, owner ..)
//email verification and password reset
//file auploads
