import React from 'react';
import { Provider } from 'react-redux';


import '../../css/app.css';
import App from './app/App';


const Root = ({ store }) => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default Root;