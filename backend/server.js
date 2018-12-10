const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

const UserConnections = require('./classes/connection/UserConnections');
const { USER_LOGIN } = require('./constants/ReceiveMessageTypes');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('Database is connected!') });

const UC = new UserConnections();

app.ws('/', function(ws) {
  ws.on('message', msg => {
    const message = JSON.parse(msg);
    if (message.type === USER_LOGIN) {
      UC.verifyUser(message.token, ws);
    }
  });
});

app.listen(8000);