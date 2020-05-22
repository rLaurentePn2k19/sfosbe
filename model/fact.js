var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var fact = new Schema({
    title: { type: String, required: true },
    detail: { type: String, required: true },
    // displayed: false
},
    { collection: 'fact' }
);

var Fact = mongoose.model('Fact', fact);

module.exports = Fact