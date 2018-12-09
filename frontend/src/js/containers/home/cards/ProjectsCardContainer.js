import React from 'react';
import { connect } from 'react-redux';

import Preloader from '../../../components/app/common/Preloader';
import Card from './Card';
import AddProjectCard from './AddProjectCard';
import PopupCardWindow from '../PopupCardWindow';
import SortableList from '../../SortableList';
import { moveProjectCard } from '../../../actions';


const ProjectsCardContainer = ({ cardsList, popupWindowIsOpen, onSortEnd, dataIsLoading }) => {
  const projectCards = cardsList.map(card => {
    return <Card key={ card.id } config={ card } />
  });
  
  const shouldCancelStart = e => {
    const disabledElements = ['input', 'textarea', 'select', 'option', 'button', 'i', 'a'];
    if (disabledElements.indexOf(e.target.tagName.toLowerCase()) !== -1) {
      return true;
    }
  };
  
  return dataIsLoading ?  <Preloader wrapperClass={'bottom-big-wrapper'}/> :
      <div className={'bottom-big-wrapper card-container-wrapper'}>
        <SortableList className={'card-container'}
                      itemClassName={'custom-card'}
                      axis={'xy'}
                      items={ projectCards }
                      onSortEnd={ onSortEnd }
                      shouldCancelStart={ shouldCancelStart }
                      insertComponent={ <AddProjectCard/> }
                      useWindowAsScrollContainer={ true }
        />
        { popupWindowIsOpen ? <PopupCardWindow/> : null }
      </div>
};

const mapStateToProps = ({  cards, status }) => ({
  cardsList: cards.present.list,
  popupWindowIsOpen: status.popupWindowIsOpen,
  dataIsLoading: status.dataIsLoading
});

const mapDispatchToProps = dispatch => ({
  onSortEnd: ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) dispatch(moveProjectCard(oldIndex, newIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsCardContainer);
