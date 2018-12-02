import React from 'react';

import Content from '../common/Content';
import Logo from './Logo';
import SignIn from '../../../containers/login/SignIn';
import CreatorChip from './CreatorChip';


const Login = () => (
  <div className={'app'}>
    <Content className={'header'}>
      <Logo/>
      <div className={'top-big-wrapper'}/>
    </Content>
    <Content className={'main-content'}>
      <CreatorChip/>
      <div className={'bottom-big-wrapper'}>
        <SignIn/>
      </div>
    </Content>
  </div>
);

export default Login;