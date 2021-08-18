const mongoose = require('mongoose');


const answerSchema = mongoose.Schema({
  answer_id: Number,
  is_accepted: Boolean,
  score: Number,
  creation_date: Date,
  question_id: Number,
  user_id: Number
});

module.exports = answerSchema;
