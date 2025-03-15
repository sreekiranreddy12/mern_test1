const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: String,
  issue: String,
  location: { latitude: Number, longitude: Number },
  responded: { type: Boolean, default: false },
});

module.exports = mongoose.model('Application', ApplicationSchema);
