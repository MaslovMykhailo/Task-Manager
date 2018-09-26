import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from '../../../components/app/home/cards/ProjectCard';
import AddProjectCard from '../../../components/app/home/cards/AddProjectCard';
import PopupProjectWindow from './PopupProjectWindow';
import '../../../../css/main-content.css';
import '../../../../css/project-card.css'


const ProjectsContainer = ({ projects, popupWindowIsOpen }) => {
  const cards = projects.cardList.map(id => {
    const config = { ...projects[id], id };
    return <ProjectCard key={ id } config={ config } />
  });
  
  return (
    <div className={'bottom-big-wrapper card-container-wrapper'}>
      <div className={'card-container'}>
        { cards }
        <AddProjectCard/>
      </div>
      { popupWindowIsOpen ? <PopupProjectWindow /> : null }
    </div>
  )
};

const mapStateToProps = ({ projects, status }) => ({
  projects,
  popupWindowIsOpen: status.popupWindowIsOpen
});

export default connect(mapStateToProps)(ProjectsContainer);
