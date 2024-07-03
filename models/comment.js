const mongoose = require("mongoose");
const Joi = require("joi");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//create a mongoose model
const Comment = mongoose.model("Comment", commentSchema);

// add validate function
function validateComment(post) {
  //Define schema
  const schema = Joi.object({
    content: Joi.string().require(),
  });

  return schema.validate(post);
}

exports.Comment = Comment;
exports.validate = validateComment;
