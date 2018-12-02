import React from 'react';

import Content from '../common/Content';
import UserInfo from '../../../containers/user/UserInfo';
import HomeActionBar from '../actionBar/HomeActionBar';
import ProjectsContainer from '../../../containers/home/cards/ProjectsContainer';


const Home = () => (
  <div className={'app'}>
    <Content className={'header'}>
      <div className={'top-big-wrapper'}><span className={'caption'}>My projects</span></div>
      <UserInfo className={'top-small-wrapper'}/>
    </Content>
    <Content className={'main-content'}>
      <ProjectsContainer/>
      <HomeActionBar/>
    </Content>
  </div>
);

export default Home;