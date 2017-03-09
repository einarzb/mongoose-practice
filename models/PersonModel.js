var mongoose = require('mongoose');
var Schema = mongoose.Schema; //the function that constructs objects

var personSchema = new Schema ({ //the instance is an object that has properties!
  hair: String, //fieldname:SchemaType
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: []
});

var Person = mongoose.model('PersonModel', personSchema) 
module.exports = Person;
