const mongoose = require('mongoose');
const userSchema = require('../schemas/user');

const User = mongoose.model('user', userSchema);

module.exports = User;
