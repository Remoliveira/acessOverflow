const mongoose = require('mongoose');

const siteSchema = mongoose.schema({
  site_id: String,
  site_name: String,
  Site_link: String
});

module.exports = siteSchema;
