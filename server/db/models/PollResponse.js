const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  poll_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll',
    required: true
  },
  poll_response: {type: String},
  timestamp: {type: Date, required: true}
});

module.exports = mongoose.model('PollResponse', schema);
