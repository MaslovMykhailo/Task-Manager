import React from 'react';

import '../../css/project-card.css'

const ProjectCard = () => (
  <div className="custom-card mdl-card mdl-shadow--4dp">
    <div className="mdl-card__title mdl-card--expand">
      <h2 className="mdl-card__title-text">Project Name</h2>
    </div>
    <div className="mdl-card__supporting-text">
      Project description
    </div>
    <div className="mdl-card__actions mdl-card--border">
      <a className="mdl-button mdl-js-button mdl-js-ripple-effect">
        OPEN
      </a>
    </div>
    <button className="close mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i className="material-icons">close</i>
    </button>
    <button className="edit mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i className="material-icons">edit</i>
    </button>
  </div>
);

export default ProjectCard;