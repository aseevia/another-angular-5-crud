var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Customers
var CustomerSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  birthday: String,
  gender: String,
  lastContact: String,
  customerLifetimeValue: Number,
});

module.exports = mongoose.model('Customer', CustomerSchema);
