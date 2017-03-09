var mongoose = require('mongoose');
var Schema = mongoose.Schema; //the function that constructs objects

var bookSchema = new Schema ({ 
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: Number
});

var Book = mongoose.model('BookModel', bookSchema); 
module.exports = Book;
