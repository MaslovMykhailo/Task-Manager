const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const UserConnection = require('./classes/UserConnections');

app.ws('/', function(ws, req) {
  const us = new UserConnection(ws, expressWs.getWss);
});

app.listen(8000);