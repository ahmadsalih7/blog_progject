const mongoose = require('mongoose');
const express = require('express');
const register = require('./routes/register');
const logger = require('./config/logger')

// create an app to handle API requests
const app = express();
app.use(express.json());

// preparing listening ports
app.listen(3000, () => {
  logger.info("Server is on and listening to port 3000");
});

app.use('/api/register', register);



mongoose.connect('mongodb://localhost:27017/blogdb')
  .then(() => logger.info('MongoDB connected successfully!'))
  .catch(err => logger.error('MongoDB connection error:', err));
