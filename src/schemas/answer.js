const mongoose = require('mongoose');

const answerSchema = mongoose.schema({
  answer_id: String,
  is_accepted: Boolean
});

module.exports = answerSchema;
