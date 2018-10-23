import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import AddProjectCard from './AddProjectCard';
import PopupProjectWindow from './PopupProjectWindow';


const ProjectsContainer = ({ cardsList, popupWindowIsOpen }) => {
  const projectCards = cardsList.map(card => {
    return <Card key={ card.id } config={ card } />
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
