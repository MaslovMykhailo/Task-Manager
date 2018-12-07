import React from 'react';
import { connect } from 'react-redux';
import { createTask } from "../../../actions";


const AddTask = ({ columnId, position, onClick }) => (
  <div className="add-task mdl-card">
    <button className="mdl-button mdl-button--icon"
            onClick={ onClick(columnId, position) }
    >
      <i className="material-icons">add</i>
    </button>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  columnId: ownProps.columnId,
  position: state.currentProject.present.columns.find(col => col.id === ownProps.columnId).tasks.length
});

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