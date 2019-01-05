const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  id: String,
  cards: [Object],
  projects: [Object]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;