import React from 'react';
import { connect } from 'react-redux';

import { openPopupWindow } from "../../../actions";


const AddTaskColumn = ({ onClickHandler }) => (
  <div className="add-column-wrapper">
    <div className="add-column mdl-card mdl-shadow--4dp"
         onClick={onClickHandler}
    >
      <button className="add-column-button mdl-button mdl-button--icon">
        <i className="material-icons">add</i>
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onClickHandler: () => {
    dispatch(openPopupWindow('create-column'))
  }
});

export default connect(undefined, mapDispatchToProps)(AddTaskColumn);