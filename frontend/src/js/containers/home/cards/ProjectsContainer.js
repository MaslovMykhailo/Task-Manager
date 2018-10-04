import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from '../../../components/app/home/cards/ProjectCard';
import AddProjectCard from '../../../components/app/home/cards/AddProjectCard';
import PopupProjectWindow from './PopupProjectWindow';
import '../../../../css/main-content.css';
import '../../../../css/project-card.css'


const ProjectsContainer = ({ cardsList, popupWindowIsOpen }) => {
  const projectCards = cardsList.map(card => {
    return <ProjectCard key={ card.id } config={ card } />
  });
  
  return (
    <div className={'bottom-big-wrapper card-container-wrapper'}>
      <div className={'card-container'}>
        { projectCards }
        <AddProjectCard/>
      </div>
      { popupWindowIsOpen ? <PopupProjectWindow /> : null }
    </div>
  )
};

const mapStateToProps = ({  cards, status }) => ({
  cardsList: cards.present.list,
  popupWindowIsOpen: status.popupWindowIsOpen
});

export default connect(mapStateToProps)(ProjectsContainer);
