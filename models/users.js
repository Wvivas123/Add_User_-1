const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  secondName: {
    type: String,
  },
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', userSchema);
