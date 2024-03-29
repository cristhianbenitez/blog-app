const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Blog title is required'] },
  author: { type: String, required: [true, 'Blog author is required'] },
  url: String,
  likes: Number,
  text: String,
  comments: [{ body: String, date: Date, author: String }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Blog', blogSchema);
