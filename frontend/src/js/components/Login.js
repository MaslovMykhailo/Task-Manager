import React from 'react';

import Footer from './Footer';
import MainContent from './MainContent';
import Logo from './Logo';
import SignIn from '../containers/SignIn';
import CreatorChip from './CreatorChip';
import '../../css/footer.css';
import '../../css/main-content.css';


const Login = () => (
  <div className={'app'}>
    <Footer>
      <Logo/>
      <div className={'top-big-wrapper'}/>
    </Footer>
    <MainContent>
      <CreatorChip/>
      <div className={'bottom-big-wrapper'}>
        <SignIn/>
      </div>
    </MainContent>
  </div>
);

export default Login;