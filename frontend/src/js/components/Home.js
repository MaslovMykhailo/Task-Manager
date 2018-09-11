import React from 'react';

import Footer from './Footer';
import MainContent from './MainContent';
import UserInfo from './UserInfo';
import ActionBar from './ActionBar';
import '../../css/footer.css';
import '../../css/main-content.css';


const Home = () => (
  <div className={'app'}>
    <Footer>
      <div className={'top-big-wrapper'}>My projects</div>
      <UserInfo/>
    </Footer>
    <MainContent>
      <div className={'bottom-big-wrapper'}/>
      <ActionBar/>
    </MainContent>
  </div>
);

export default Home;