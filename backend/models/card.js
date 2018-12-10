const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  cardColor: String
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;