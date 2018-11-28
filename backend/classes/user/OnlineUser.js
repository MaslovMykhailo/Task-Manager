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
    this.saveProjectsListToDB();
    
    if (!this.connections.length) this.removeCallback(connectionId);
  }
  
  sendAllConnections(message, connectionId) {
    this.connections.forEach(ws => {
      ws.send(message, connectionId)
    });
  }
  
  onMessage(message, connectionId) {
    switch (message.type) {
      case receiveTypes.CHANGE_CARDS: {
        this.setCards = message.cards;
        this.sendAllConnections(
          messageCreators.sendChangedCards(this.getCards, connectionId)
        );
        break;
      }
      case receiveTypes.USER_LOGOUT: {
        this.connectionDidClose(connectionId);
        break;
      }
      case receiveTypes.OPEN_PROJECT: {
        const projectId = message.projectId;
        
        let openedProject = this.getCurrentProjectById(projectId);
        if (!openedProject) {
          // need to get project form DB
          openedProject = this.getProjectFromDB(projectId);
          this.addCurrentProject(openedProject);
        }
        this.connections.find(c => c.id === connectionId).sendOne(
          messageCreators.sendProjectData(openedProject)
        );
        break;
      }
      case receiveTypes.CHANGE_PROJECT: {
        const changedProject = this.changeCurrentProject(message.project.id);
        this.sendAllConnections(
          messageCreators.sendChangedProject(changedProject), connectionId
        );
        break;
      }
      case receiveTypes.CLOSE_PROJECT: {
        this.saveProjectToDB(message.projectId);
        break;
      }
      default: {
        console.log('Unknown message: ', message);
        break;
      }
    }
  }
}

module.exports = Logable(OnlineUser);