const mongoose = require('mongoose');

// add Mongoose schemas
const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number,
});

// add Mongsoose models
module.exports = mongoose.model('Subscriber', subscriberSchema);