import React from 'react';


const UndoRedoButtons = ({ canUndo, canRedo, onUndo, onRedo, vertical }) => (
  <div className={'undo-redo-container' + (vertical ? ' vertical-container' : '')}>
    <div className="undo-redo-wrapper">
      { !vertical ? <span className="button-name">Undo</span> : null }
      <button className="mdl-button mdl-button--fab mdl-button--colored"
              onClick={onUndo}
              disabled={!canUndo}
      >
        <i className="material-icons">undo</i>
      </button>
    </div>
    <div className="undo-redo-wrapper">
      { !vertical ? <span className="button-name">Redo</span> : null }
      <button className="mdl-button mdl-button--fab mdl-button--colored"
              onClick={onRedo}
              disabled={!canRedo}
      >
        <i className="material-icons">redo</i>
      </button>
    </div>
  </div>
);

export default UndoRedoButtons;