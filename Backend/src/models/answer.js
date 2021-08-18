const mongoose = require('mongoose');
const answerSchema = require('../schemas/answer');

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
