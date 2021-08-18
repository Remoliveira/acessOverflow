const mongoose = require('mongoose');
const questionSchema = require('../schemas/question');

const Question = mongoose.model('question', questionSchema);

module.exports = Question;
