import React from 'react';


const Task = ({ shortName, onRemove, onMove, onShow }) => (
  <div className="task mdl-card mdl-shadow--2dp">
    <div className="mdl-card__supporting-text"><span>{ shortName }</span></div>
    <button className="mdl-button mdl-button--icon"
            onClick={ onShow }
    >
      <i className="material-icons">visibility</i>
    </button>
    <button className="mdl-button mdl-button--icon"
            onClick={ onMove }
    >
      <i className="material-icons">arrow_forward</i>
    </button>
    <button className="mdl-button mdl-button--icon"
            onClick={ onRemove }
    >
      <i className="material-icons">delete</i>
    </button>
  </div>
);

export default Task;