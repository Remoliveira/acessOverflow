const mongoose = require('mongoose');

const postSchema = mongoose.schema({
  Post_id: String,
  creation_date: Date,
  last_edit_date: Date,
  last_activity_date: Date,
  link: String,
  score: Number,
  question: ObjectId,
  Answers: [ObjectId]
});
