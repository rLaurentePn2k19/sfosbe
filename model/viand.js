var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var viand = new Schema({
  name: { type: String, required: true },
  image: { type: [String], required: true }
},
  { collection: 'viand' }
);

var Viand = mongoose.model('Viand', viand);

module.exports = Viand