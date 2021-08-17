const mongoose = require('mongoose');
const answer = require("../schemas/answer")
const user = require("../schemas/user")

const questionSchema = new mongoose.Schema({
    question_id: Number,
    title: String,
    answer_count: Number,
    is_answered: Boolean,
    view_count: Number,
    tags: [String],
    creation_date: Date,
    owner: [user]
});

module.exports = questionSchema;
