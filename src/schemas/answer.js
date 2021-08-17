const mongoose = require('mongoose');
const user = require("../schemas/user")

const answerSchema = mongoose.Schema({
  answer_id: Number,
  is_accepted: Boolean,
  score: Number,
  creation_date: Date,
  question_id: Number,
  owner: [user],
  onwer_id: Number
});

module.exports = answerSchema;
