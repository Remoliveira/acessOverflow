const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  answer_id: Number,
  question_id: Number,
  is_accepted: Boolean
});

module.exports = answerSchema;
