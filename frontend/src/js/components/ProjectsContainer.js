import React from 'react';

import ProjectCard from './ProjectCard';
import AddProjectCard from './AddProjectCard';
import '../../css/main-content.css';
import '../../css/project-card.css'

const ProjectsContainer = () => (
  <div className={'bottom-big-wrapper card-container-wrapper'}>
    <div className={'card-container'}>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <AddProjectCard/>
    </div>
  </div>
);

export default ProjectsContainer;
