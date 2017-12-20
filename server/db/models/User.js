const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {type: String, require: true, unique: true, index: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  image_url: {type: String},
  logins: [{type: Date}],
  devMtn: {
    id: {type: String},
    roles: [{}],
    cohort_id: {type: String},
  },
  permissions: {type: String},
  preferences: {
    default_cohort: {type: String},
    squelch_cohorts: [String]
  }
});

module.exports = mongoose.model('User', schema);
