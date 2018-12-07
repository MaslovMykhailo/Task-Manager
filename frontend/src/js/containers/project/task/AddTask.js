import React from 'react';
import { connect } from 'react-redux';
import { createTask } from "../../../actions";
import Colors from "../../../constants/Colors";


const AddTask = ({ columnId, position, onClick, color }) => (
  <div className="add-task mdl-card mdl-shadow--2dp"
       onClick={ onClick(columnId, position) }
  >
    <button className="mdl-button mdl-button--icon"
            style={{color: Colors[color].darkRGB}}
    >
      <i className="material-icons">add</i>
    </button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const column = state.currentProject.present.columns.find(col => col.id === ownProps.columnId);

  return {
    columnId: ownProps.columnId,
    position: column.tasks.length,
    color: column.color
  }
};

const mapDispatchToProps = dispatch => ({
  onClick: (columnId, position) => () => {
    dispatch(createTask({
      columnId,
      position,
      shortName: position.toString(),
      description: '',
      links: []
    }))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);