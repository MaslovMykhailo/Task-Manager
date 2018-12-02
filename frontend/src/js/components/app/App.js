import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from '../../containers/PrivateRoute';
import Login from './login/Login';
import Home from './home/Home';
import Project from '../../containers/project/Project';


const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={'/home'} component={Home}/>
        <PrivateRoute path={'/project=:id'} component={Project}/>
        <Route path={'/'} component={Login}/>
      </Switch>
    </Router>
  )
};

export default App;