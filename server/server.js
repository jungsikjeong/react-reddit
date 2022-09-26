const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/posts', require('./routes/postsRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
