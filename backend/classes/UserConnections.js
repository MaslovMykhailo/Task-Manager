const verify = require('../verify/index');
const OnlineUser = require('./OnlineUser');
const { USER_LOGIN } = require('../constants/ReceiveMessageTypes');

class UserConnections {
  constructor(ws, getWss) {
    this.onlineUsers = [];
    this.getWss = getWss;
    
    ws.on('message', msg => {
      const self = this;
      const message = JSON.parse(msg);
      
      if (message.type === USER_LOGIN) {
        verify(message.token)
          .then(function (userData) {
            self.addOnlineUser(userData.sub, userData.name, ws);
          })
          .catch(console.error);
      }
    });
  }
  
  addOnlineUser(id, name, ws) {
    let curUser = this.onlineUsers.find(user => user.id === id);
    if (!curUser) {
      curUser = new OnlineUser(id, name, this.removeOnlineUser.bind(this));
    }
    
    for (const client of this.getWss().clients) {
      if (ws === client) {
        curUser.addConnection(client);
        
        console.log(curUser);
        
        break;
      }
    }
    this.onlineUsers.push(curUser);
  }
  
  removeOnlineUser(id) {
    let index = this.onlineUsers.findIndex(user => user.id === id);
    this.onlineUsers.splice(index, 1);
  }
}

module.exports = UserConnections;
