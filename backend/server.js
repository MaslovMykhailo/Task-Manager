const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const UserConnections = require('./classes/UserConnections');
const { USER_LOGIN } = require('./constants/ReceiveMessageTypes');

const UC = new UserConnections();

app.ws('/', function(ws, req) {
  ws.on('message', msg => {
    const message = JSON.parse(msg);
    if (message.type === USER_LOGIN) {
      UC.verifyUser(message.token, ws);
    }
  });
});

app.listen(8000);