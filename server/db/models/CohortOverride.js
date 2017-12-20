const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  student_email: {type: String},
  cohort_override_id: {type: String}
});

module.exports = mongoose.model('CohortOverride', schema);
