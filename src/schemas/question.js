const mongoose = require('mongose');

const question = new mongoose.Schema({
    _id: String,
    title: String,
    answer_count: Number,
    is_answered: Boolean,
    view_count: Number,
    tags: [String]
});
