const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  cohort_id: {type: String},
  _attendanceDay: {type:mongoose.Schema.Types.ObjectId, ref:'AttendanceDay'},
  attendance_data: {
    date_of_attendance: {type:mongoose.Schema.Types.ObjectId, ref:'AttendanceDay'},
    time_in: {type: Date},
    time_out: {type: Date},
    score: {type: Number},
    late: {type: Boolean},
    left_early: {type: Boolean},
    absent: {type: Boolean},
    note: {type: String}
  }
});

module.exports = mongoose.model('AttendanceLog', schema);
