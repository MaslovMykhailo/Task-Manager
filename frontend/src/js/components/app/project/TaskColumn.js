import React from 'react';

import Colors from "../../../constants/Colors";
import createRGBA from '../../../functions/createRGBA';


const TaskColumn = ({ name, color, onClickHandler }) => {
  return (
    <div className="column mdl-card mdl-shadow--4dp">
      <div className="column-title mdl-card__title"
           style={{background: Colors[color].RGB}}
      >
        <h2 className="column-name mdl-card__title-text">{ name }</h2>
        <button className="column-edit mdl-button mdl-button--icon"
                onClick={ onClickHandler }
        >
          <i className="material-icons">edit</i>
        </button>
      </div>
      <div className="tasks"
           style={{background: createRGBA(color, '0.1')}}
      />
    </div>
  )
};

export default TaskColumn;