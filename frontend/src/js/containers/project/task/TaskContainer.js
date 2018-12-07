import React from 'react';
import { connect } from 'react-redux';

import SortableList from "../../SortableList";
import AddTask from './AddTask';
import { moveTaskInsideColumn, removeTask } from "../../../actions";
import Task from "../../../components/app/project/Task";


const TaskContainer = ({ columnId, tasksList, onSortEnd, onRemove }) => {
  const tasks = tasksList.map((task, i) =>
    <Task shortName={task.shortName}
          onRemove={onRemove(columnId, i)}
    />
  );

  const shouldCancelStart = e => e.target.tagName.toLowerCase() === 'i';

  return (
    <SortableList className={'task-container'}
                  itemClassName={'task'}
                  axis={'y'}
                  items={tasks}
                  onSortEnd={onSortEnd(columnId)}
                  shouldCancelStart={shouldCancelStart}
                  insertComponent={<AddTask columnId={columnId}/>}
                  useWindowAsScrollContainer={true}
    />
  )
};

const mapStateToProps = (state, ownProps) => ({
  columnId: ownProps.columnId,
  tasksList: state.currentProject.present.columns.find(col => col.id === ownProps.columnId).tasks
});

const mapDispatchToProps = dispatch => ({
  onSortEnd: columnId => ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) dispatch(moveTaskInsideColumn(columnId, oldIndex, newIndex))
  },
  onRemove: (columnId, position) => () => {
    dispatch(removeTask(columnId, position))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);