const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const register = require('./routes/register');
const {logger} = require('./config/logger')

// create an app to handle API requests
const app = express();
app.use(express.json());

// preparing listening ports
const port = config.get('PORT');
const message = 'Server is on and listening on port '+ port;
app.listen(port, () => {
  logger.info(message);
});

app.use('/api/register', register);



mongoose.connect('mongodb://localhost:27017/blogdb')
  .then(() => logger.info('MongoDB connected successfully!'))
  .catch(err => logger.error('MongoDB connection error:', err));
