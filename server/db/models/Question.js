const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    student_name: { type: String, required: true },
    student_id: { type: String },
    cohort_id: { type: String },
    mentor_name: { type: String },
    image_url: { type: String },
    question: { type: String, required: true },
    directive: { type: String, required: true },
    time_when_entered: { type: Date, required: true },
    time_mentor_begins: { type: Date },
    time_when_answered: { type: Date },
    student_solution: { type: String },
    mentor_solution: { type: String },
    question_category: { type: String }
});

module.exports = mongoose.model('Question', schema);
