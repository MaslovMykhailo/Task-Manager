import React from 'react';
import { connect } from 'react-redux';

import { openPopupWindow } from '../../../../actions/index';
import '../../../../../css/project-card.css';


const AddProjectCard = props => (
  <div className="empty-card mdl-card mdl-shadow--4dp">
    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
            onClick={props.createCard}
    >
      <i className="material-icons">add</i>
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  createCard:() => dispatch(openPopupWindow('create'))
});

export default connect(null, mapDispatchToProps)(AddProjectCard);