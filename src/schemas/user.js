const mongoose = require('mongoose');

const userSchema = mongoose.schema({
  user_id: Number,
  reputation: Number,
  type: String,
  accept_rate: Number,
  diplay_name: String,
  User_link: String,
  badges: [{type: String,
            badge_id: Number,
            quantity: Number
  }]
});

module.exports = userSchema;
