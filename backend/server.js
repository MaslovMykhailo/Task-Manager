const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '172468454646-3fciv2jsjjsq5vgq3qethn0rebm1pu61.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  
  return ticket.getPayload();
}

app.use(function (req, res, next) {
  req.something = 'testing';
  return next();
});

app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    const message = JSON.parse(msg);
    verify(message.token)
      .then(function (user_data) {
        const userData = {
          userId: user_data.sub,
          email: user_data.email,
          userName: user_data.name,
        };
        
        console.log(userData);
      })
      .catch(console.error);
  });
  console.log('socket', req.something);
});

app.listen(8000);