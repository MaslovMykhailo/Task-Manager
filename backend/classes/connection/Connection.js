const Logable = require('../../logable/Logable');

class Connection {
  constructor(ws, id, onMessage, closeConnectionCallback) {
    this.ws = ws;
    this.id = id;

    this.ws.on('message', message => {
      onMessage(JSON.parse(message), id);
    });
    
    this.ws.on('close', () => {
      closeConnectionCallback(id);
    });
  }
  
  send(message) {
    this.ws.send(message);
  }
}

module.exports = Logable(Connection);