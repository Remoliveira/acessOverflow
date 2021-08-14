const mongoose = require('mongose');

const questionSchema = new mongoose.Schema({
    question_id: String,
    title: String,
    answer_count: Number,
    is_answered: Boolean,
    view_count: Number,
    tags: [String]
});

module.exports = questionSchema;
