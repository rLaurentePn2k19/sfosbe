var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var order = new Schema({
  costumer_name: { type: String, required: true },
  viands: [
    {
      _name: { type: String, required: true },
      _qty: { type: Number, required: true },
    }
  ],
  date: {type: String}
},
  { collection: 'order' }
);


var Order = mongoose.model('Order', order);

module.exports = Order