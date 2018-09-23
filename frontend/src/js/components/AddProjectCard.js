import React from 'react';

import '../../css/project-card.css';

const AddProjectCard = () => (
  <div className="empty-card mdl-card mdl-shadow--4dp">
    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
      <i className="material-icons">add</i>
    </button>
  </div>
);

export default AddProjectCard;