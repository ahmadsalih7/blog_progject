const mongoose = require('mongoose');
const express = require('express');
const register = require('./routes/register');

// create an app to handle API requests
const app = express();
app.use(express.json());

// preparing listening ports
app.listen(3000, ()=>{
  console.log("Listening to port 3000.... ");
});

app.use('/api/register', register);



mongoose.connect('mongodb://localhost:27017/blogdb')
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));
