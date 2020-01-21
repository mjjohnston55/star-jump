// Entry point to the back-end

const express = require('express');
connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// GET home route
app.get('/', (req, res) => res.json('Welcome to the Kids-Learning-App API'));

////// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/stars', require('./routes/stars'));

// If there is an environment variable for hosted port, use it, otherwise use 5000 (development)
const PORT = process.env.PORT || 8000;

// Start server with PORT
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
