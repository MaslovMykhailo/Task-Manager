import React from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


import Root from './components/Root';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

render(
  <Root store={store}/>,
  document.getElementById('root')
);