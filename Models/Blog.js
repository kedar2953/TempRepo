const mongoose = require('mongoose');
const User = require('./User');

const BlogPostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: User,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
