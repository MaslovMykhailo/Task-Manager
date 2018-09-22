import React from 'react';

import Header from './Header';
import MainContent from './MainContent';
import Logo from './Logo';
import SignIn from '../containers/SignIn';
import CreatorChip from './CreatorChip';
import '../../css/header.css';
import '../../css/main-content.css';


const Login = () => (
  <div className={'app'}>
    <Header>
      <Logo/>
      <div className={'top-big-wrapper'}/>
    </Header>
    <MainContent>
      <CreatorChip/>
      <div className={'bottom-big-wrapper'}>
        <SignIn/>
      </div>
    </MainContent>
  </div>
);

export default Login;