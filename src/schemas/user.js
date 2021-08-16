const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  user_id: Number,
  reputation: Number,
  type: String,
  accept_rate: Number,
  diplay_name: String,
  link: String,
  is_employee: String,
  badge_counts: [{bronze: Number,
            silver: Number,
            gold: Number
  }]
});

module.exports = userSchema;
