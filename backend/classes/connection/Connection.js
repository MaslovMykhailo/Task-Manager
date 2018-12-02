const Logable = require('../../logable/Logable');

class Connection {
  constructor(ws, id, onMessage, closeConnectionCallback) {
    this.ws = ws;
    this.id = id;
    this.messageListener = message => { onMessage(JSON.parse(message), id) };
    this.closeListener = () => { closeConnectionCallback(id) };

    ws.on('message', this.messageListener);
    ws.on('close', this.closeListener);
  }
  
  send(message) {
    this.ws.send(message);
  }

  clearListeners() {
    this.ws.removeListener('message', this.messageListener);
    this.ws.removeListener('close', this.closeListener);
  }
}

module.exports = Logable(Connection);