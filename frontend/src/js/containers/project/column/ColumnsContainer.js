import React from 'react';
import { connect } from 'react-redux';

import { moveTaskColumn, openPopupWindow } from "../../../actions";
import SortableList from '../../SortableList';
import TaskColumn from '../../../components/app/project/TaskColumn'
import AddTaskColumn from './AddTaskColumn';


const ColumnsContainer = ({ columnsList, onSortEnd, onClickByColumnHandler }) => {
  const columns = columnsList.map(col => (
    <TaskColumn name={col.name}
                color={col.color}
                onClickHandler={onClickByColumnHandler(col.id)}
    />
  ));

  const shouldCancelStart = e => !e.target.classList.contains('column-title');
  return(
    <SortableList className={'column-container'}
                  itemClassName={'column-wrapper'}
                  axis={'x'}
                  items={ columns }
                  onSortEnd={ onSortEnd }
                  shouldCancelStart={ shouldCancelStart }
                  insertComponent={ <AddTaskColumn/> }
                  useWindowAsScrollContainer={ true }
    />
  )
};

const mapStateToProps = ({ currentProject }) => ({
  columnsList: currentProject.present.columns
});

const mapDispatchToProps = dispatch => ({
  onClickByColumnHandler: (id) => () => {
    dispatch(openPopupWindow('edit-column', id))
  },
  onSortEnd: ({ oldIndex, newIndex }) => {
    dispatch(moveTaskColumn(oldIndex, newIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsContainer);