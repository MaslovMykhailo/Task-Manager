const UserWithDB = require('./UserWithDB');
const Connection = require('./Connection');
const receiveTypes = require('../constants/ReceiveMessageTypes');
const messageCreators = require('../messageCreators/sendMessageCreators');

class OnlineUser extends  UserWithDB {
  constructor(id, name, removeUserCallback) {
    super(id, name);
    this.connections = [];
    this.removeCallback = removeUserCallback;
  }
  
  static createConnectionId() {
    return Math.random() % 10 + Date.now() + Math.random() % 10;
  }
  
  addConnection(ws) {
    this.connections.push(new Connection(ws, OnlineUser.createConnectionId(), this));
    this.connections[this.connections.length - 1]
      .sendOne(messageCreators.sendCardList(this.cards));
  }
  
  connectionDidClose(connectionId) {
    let index = this.connections.findIndex(ws => ws.id === connectionId);
    this.connections.splice(index, 1);
    this.saveCardsToDB();
    
    if (!this.connections.length) this.removeCallback(connectionId);
  }
  
  onMessage(message, connectionId) {
    switch (message.type) {
      case receiveTypes.CHANGE_CARDS: {
        this.cards = message.cards;
        console.log(this.connections);
        this.connections.forEach(ws => {
          ws.send(messageCreators.sendChangedCards(this.cards), connectionId)
        });
        break;
      }
      case receiveTypes.USER_LOGOUT: {
        this.connectionDidClose(connectionId);
        break;
      }
      default:
        break;
    }
  }
}

module.exports = OnlineUser;