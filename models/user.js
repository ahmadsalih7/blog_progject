const mongoose = require ('mongoose');
const Joi = require('joi');

//Create mongoose schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      min: 3,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
  

//create a mongoose model
const User = mongoose.model('User', userSchema);


// add validate function
function validateUser(user) {
    //Define schema 
    const schema = Joi.object({
        name: Joi.string().min(3).required().unique();
    });
    
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;