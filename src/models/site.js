const mongoose = require('mongoose');
const siteSchema = require('../schemas/site');

const Site = mongoose.model('site', siteSchema);

module.exports = Site;
