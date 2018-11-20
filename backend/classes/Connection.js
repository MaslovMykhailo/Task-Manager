class Connection {
  constructor(ws, id, user) {
    this.ws = ws;
    this.id = id;
    this.user = user;
    
    this.ws.on('message', message => {
      this.user.onMessage(JSON.parse(message), this.id);
    });
    
    this.ws.on('close', () => {
      this.user.connectionDidClose(this.id);
    });
  }
  
  send(message, id) {
    if (id !== this.id) this.ws.send(message);
  }
  
  sendOne(message) {
    this.ws.send(message);
  }
}

module.exports = Connection;