import React from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Root from './components/Root';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import socket from './websocket/socket';
import wsMiddleware from './websocket/wsMiddleware';


const store = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(wsMiddleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

socket.addDispatcher(store.dispatch);

render(
  <Root store={store}/>,
  document.getElementById('root')
);