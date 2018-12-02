import React from 'react';

import Content from '../common/Content';
import UserInfo from  '../../../containers/user/UserInfo';
import ProjectActionBar from '../actionBar/ProjectActionBar';
import CurrentProject from '../../../containers/project/CurrentProject';


const ProjectContent = ({ name, id }) => {
  return (
    <div className={'app'}>
      <Content className={'project-header'}>
        <div className={'project-header__name'}>
          <span className={'project-name'}>{name}</span>
        </div>
        <UserInfo className={'project-header__user-info'} onlyPhoto={true}/>
      </Content>
      <Content className={'project-content'}>
        <CurrentProject id={id}/>
        <ProjectActionBar />
      </Content>
    </div>
  )
};

export default ProjectContent;