import React from 'react';

import Colors from '../../../constants/Colors';


const ProjectCard = ({ config, editCard, removeCard, openProject }) => {
  const { name, description, cardColor, id } = config;
  
  return (
    <div className="custom-card mdl-card mdl-shadow--4dp">
      <div className="mdl-card__title mdl-card--expand"
           style={{ backgroundColor: Colors[cardColor].RGB }}
      >
        <h2 className="mdl-card__title-text">{ name }</h2>
      </div>
      <div className="mdl-card__supporting-text">{ description }</div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button"
           style={{ color: Colors[cardColor].darkRGB }}
           onClick={openProject}
        >
          OPEN
        </a>
      </div>
      <button className="close mdl-button mdl-button--icon"
              onClick={ removeCard(id) }
      >
        <i className="material-icons">delete_forever</i>
      </button>
      <button className="edit mdl-button mdl-button--icon"
              style={{ color: Colors[cardColor].darkRGB }}
              onClick={ editCard(id) }
      >
        <i className="material-icons">edit</i>
      </button>
    </div>
)};

export default ProjectCard;