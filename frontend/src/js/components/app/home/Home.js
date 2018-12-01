import React from 'react';

import Content from '../Content';
import UserInfo from '../../../containers/user/UserInfo';
import ActionBar from './actionBar/ActionBar';
import ProjectsContainer from '../../../containers/home/cards/ProjectsContainer';


const Home = () => (
  <div className={'app'}>
    <Content className={'header'}>
      <div className={'top-big-wrapper'}><span className={'caption'}>My projects</span></div>
      <UserInfo/>
    </Content>
    <Content className={'main-content'}>
      <ProjectsContainer/>
      <ActionBar/>
    </Content>
  </div>
);

export default Home;