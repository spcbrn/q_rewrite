const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  poll_type: {type: String, required: true},
  subject: {type: String, required: true},
  poll_text: {type: String, required: true},
  poll_options: {
    option_1: {type: String},
    option_2: {type: String},
    option_3: {type: String},
    option_4: {type: String}
  },
  poll_solution: {type: Number},
  timestamp: {type: Date, required: true}
});

module.exports = mongoose.model('PollTemplate', schema);
