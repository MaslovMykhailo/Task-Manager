import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../containers/PrivateRoute';

import Login from './login/Login';
import Home from './home/Home';
import '../../../css/app.css';


const App = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path={'/home'} component={Home}/>
        <Route path={'/'} component={Login}/>
      </Switch>
    </div>
  )
};

export default App;