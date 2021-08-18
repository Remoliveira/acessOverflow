const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_id: Number,
    title: String,
    answer_count: Number,
    is_answered: Boolean,
    view_count: Number,
    tags: [String],
    creation_date: Date,
    user_id: Number,
    link: String,
    site: String,
    score: Number
});

module.exports = questionSchema;
