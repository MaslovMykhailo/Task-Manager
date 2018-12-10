const UserWithDB = require('./UserWithDB');
const Connection = require('../connection/Connection');
const receiveTypes = require('../../constants/ReceiveMessageTypes');
const messageCreators = require('../../messageCreators/sendMessageCreators');
const Logable = require('../logable/Logable');


class OnlineUser extends  UserWithDB {
  constructor(id, name, removeUserCallback) {
    super(id, name);
    this.connections = [];
    this.removeCallback = removeUserCallback;
  }
  
  static createConnectionId() {
    return Math.round(Math.random()*100 % 10).toString() +
      Date.now() +
      Math.round(Math.random()*10).toString();
  }
  
  addConnection(ws) {
    const addedConnection = new Connection(ws,
      OnlineUser.createConnectionId(),
      this.onMessage.bind(this),
      this.connectionDidClose.bind(this)
    );
    this.connections.push(addedConnection);
    addedConnection.send(messageCreators.sendCardList(this.getCards));
  }
  
  connectionDidClose(connectionId) {
    let index = this.connections.findIndex(ws => ws.id === connectionId);
    this.connections[index].clearListeners();
    this.connections.splice(index, 1);

    this.saveCardsToDB();
    this.saveProjectsListToDB();
    
    if (!this.connections.length) this.removeCallback(this.id);
  }
  
  sendAllConnectionsWithoutOne(message, connectionId) {
    this.connections.forEach(ws => {
      if (ws.id !== connectionId) {
        ws.send(message, connectionId)
      }
    });
  }
  
  onMessage(message, connectionId) {
    switch (message.type) {
      case receiveTypes.CHANGE_CARDS: {
        this.setCards = message.cards;
        this.sendAllConnectionsWithoutOne(
          messageCreators.sendChangedCards(this.getCards), connectionId
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
        this.connections.find(c => c.id === connectionId).send(
          messageCreators.sendProjectData(openedProject)
        );
        break;
      }
      case receiveTypes.CHANGE_PROJECT: {
        const { projectId } = message;

        if (!this.getCurrentProjectById(projectId)) {
          this.addCurrentProject(this.getProjectFromDB(projectId));
        }

        const changedProject = this.changeCurrentProject(message.project.id);
        this.sendAllConnectionsWithoutOne(
          messageCreators.sendChangedProject(changedProject), connectionId
        );
        break;
      }
      case receiveTypes.CLOSE_PROJECT: {
        const { projectId } = message;
        if (this.getCurrentProjectById(projectId)) this.saveProjectToDB(projectId);
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