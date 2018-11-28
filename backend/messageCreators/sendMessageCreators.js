const sendMessageTypes = require('../constants/SendMessageTypes');

module.exports.sendCardList = cards => JSON.stringify({
  type: sendMessageTypes.CARDS_LIST,
  cards: cards
});

module.exports.sendChangedCards = cards => JSON.stringify({
  type: sendMessageTypes.CHANGE_CARDS,
  cards: cards
});

module.exports.sendProjectData = project => JSON.stringify({
  type: sendMessageTypes.PROJECT_DATA,
  project: project
});

module.exports.sendChangedProject = project => JSON.stringify({
  type: sendMessageTypes.CHANGE_PROJECT,
  project: project
});