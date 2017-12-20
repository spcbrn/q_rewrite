const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  cohort_id: {type: String},
  alias: {type: String},
  active: {type: Boolean, default: true}
});

module.exports = mongoose.model('CohortAlias', schema);
