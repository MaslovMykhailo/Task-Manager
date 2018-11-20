const sendMessageTypes = require('../constants/SendMessageTypes');

module.exports.sendCardList = cards => JSON.stringify({
  type: sendMessageTypes.CARDS_LIST,
  cards: cards
});

module.exports.sendChangedCards = cards => JSON.stringify({
  type: sendMessageTypes.CHANGE_CARDS,
  cards: cards
});