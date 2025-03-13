const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    contact: String,
    location: String,
    emergencyType: String
});

module.exports = mongoose.model('User', UserSchema);
