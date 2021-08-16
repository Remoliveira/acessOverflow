const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_id: Number,
    title: String,
    answer_count: Number,
    is_answered: Boolean,
    view_count: Number,
    tags: [String]
});

module.exports = questionSchema;
