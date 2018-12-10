const mongoose = require('mongoose');
const Card = require('./card');
const Project = require('./project');

const UserSchema = new mongoose.Schema({
  name: String,
  id: String,
  cards: [Card],
  project: [Project]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;