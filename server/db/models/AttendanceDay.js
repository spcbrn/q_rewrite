const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  cohort_id: {type: String},
  day: Number,
  date: {type: Date, default: new Date()}
});

module.exports = mongoose.model('AttendanceDay', schema);
