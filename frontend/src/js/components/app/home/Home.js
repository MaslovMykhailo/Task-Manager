import React from 'react';

import Header from '../Header';
import MainContent from '../MainContent';
import UserInfo from './UserInfo';
import ActionBar from './actionBar/ActionBar';
import ProjectsContainer from '../../../containers/home/cards/ProjectsContainer';
import '../../../../css/header.css';
import '../../../../css/main-content.css';


const Home = () => (
  <div className={'app'}>
    <Header>
      <div className={'top-big-wrapper'}><span className={'caption'}>My projects</span></div>
      <UserInfo/>
    </Header>
    <MainContent>
      <ProjectsContainer/>
      <ActionBar/>
    </MainContent>
  </div>
);

export default Home;