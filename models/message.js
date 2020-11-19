const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: {
    type: String,
  },
  receiverId: {
    type: String,
  },
  body: {
    type: String,
  },
  status: {
    type: Number,
    enum: [0, 1, 2, 3],
  },
  coreId: {
    type: String,
  },
});

module.exports = mongoose.model('Message', messageSchema);
