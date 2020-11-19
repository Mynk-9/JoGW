const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  bitsId: {
    type: String,
  },
  name: {
    type: String,
  },
  permissionLevel: {
    type: Number,
    enum: [0, 1, 2],
  },
});

module.exports = mongoose.model('User', userSchema);
