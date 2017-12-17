const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {type: String, require: true, unique: true, index: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  imageUrl: {type: String},
  logins: [{type: Date}],
  devMtn: {
      id: {type: String},
      roles: [{}],
      cohortId: {type: String},
  },
  preferences:{
    defaultCohort: String,
    squelchCohorts: [String]
  }
});

module.exports = mongoose.model('User', schema);
