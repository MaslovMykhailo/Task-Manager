const UserWithDB = require('./UserWithDB');
const Connection = require('../connection/Connection');
const receiveTypes = require('../../constants/ReceiveMessageTypes');
const messageCreators = require('../../messageCreators/sendMessageCreators');
const Logable = require('../../logable/Logable');


class OnlineUser extends  UserWithDB {
  constructor(id, name, removeUserCallback) {
    super(id, name);
    this.connections = [];
    this.removeCallback = removeUserCallback;
  }
  
  static createConnectionId() {
    return Math.random()*100 % 10 + Date.now() + Math.random()*100 % 10;
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
        this.setCards = message.cards;
        this.connections.forEach(ws => {
          ws.send(messageCreators.sendChangedCards(this.getCards), connectionId)
        });
        break;
      }
      case receiveTypes.USER_LOGOUT: {
        this.connectionDidClose(connectionId);
        break;
      }
      default: {
        console.log(message);
        break;
      }
    }
  }
}

module.exports = Logable(OnlineUser);