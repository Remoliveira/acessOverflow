const mongose = require('mongoose');

const answer = mongose.schema({
  _id: Number,
  is_accepted: Boolean
});
