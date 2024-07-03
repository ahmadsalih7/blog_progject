const mongoose = require ('mongoose');
const Joi = require('joi');

const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference the User model
      required: true
    },
    // Add other post fields if needed (e.g., category, tags)
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  //create a mongoose model
const Post = mongoose.model('Post', postSchema);


// add validate function
function validatePost(post) {
    //Define schema 
    const schema = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().require(),
    });
    
    return schema.validate(post);
}

exports.Post = Post;
exports.validate = validatePost;