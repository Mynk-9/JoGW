const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderEmail: {
    type: String,
  },
  receiverEmail: {
    type: String,
  },
  body: {
    type: String,
  },
  status: {
    type: Number,
    enum: [0, 1, 2, 3, 4],
  },
  coreEmail: {
    type: String,
  },
});

module.exports = mongoose.model('Message', messageSchema);
