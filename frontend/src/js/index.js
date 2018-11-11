import React from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import Root from './components/Root';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';


const store = createStore(
  rootReducer,
  loadState(),
  devToolsEnhancer()
);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Root store={store}/>,
  document.getElementById('root')
);