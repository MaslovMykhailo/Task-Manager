const verify = require('../../verify/index');
const OnlineUser = require('../user/OnlineUser');
const Logable = require('../logable/Logable');

class UserConnections {
  constructor() {
    this.onlineUsers = [];
  }
  
  verifyUser(token, ws) {
    const self = this;
    verify(token)
      .then(function (userData) {
        self.addOnlineUser(userData.sub, userData.name, ws);
      })
      .catch(console.error);
  }
  
  addOnlineUser(id, name, ws) {
    let curUser = this.onlineUsers.find(user => user.id === id);
    if (!curUser) {
      curUser = new OnlineUser(id, name, this.removeOnlineUser.bind(this));
      this.onlineUsers.push(curUser);
    }

    curUser.addConnection(ws);
  }
  
  removeOnlineUser(id) {
    let index = this.onlineUsers.findIndex(user => user.id === id);
    this.onlineUsers.splice(index, 1);
  }
}

module.exports = Logable(UserConnections);
