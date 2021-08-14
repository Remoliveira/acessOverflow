const mongoose = require('mongoose');

const answer = mongoose.schema({
  _id: Number,
  is_accepted: Boolean
});
