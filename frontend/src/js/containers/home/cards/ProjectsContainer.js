import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import AddProjectCard from './AddProjectCard';
import PopupProjectWindow from './PopupProjectWindow';
import SortableList from '../../SortableList';
import { moveProjectCard } from '../../../actions';


const ProjectsContainer = ({ cardsList, popupWindowIsOpen, onSortEnd }) => {
  const projectCards = cardsList.map(card => {
    return <Card key={ card.id } config={ card } />
  });
  
  const shouldCancelStart = e => {
    const disabledElements = ['input', 'textarea', 'select', 'option', 'button', 'i', 'a'];
    if (disabledElements.indexOf(e.target.tagName.toLowerCase()) !== -1) {
      return true;
    }
  };
  
  return (
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
      { popupWindowIsOpen ? <PopupProjectWindow/> : null }
    </div>
  )
};

const mapStateToProps = ({  cards, status }) => ({
  cardsList: cards.present.list,
  popupWindowIsOpen: status.popupWindowIsOpen
});

const mapDispatchToProps = dispatch => ({
  onSortEnd: ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) dispatch(moveProjectCard(oldIndex, newIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
