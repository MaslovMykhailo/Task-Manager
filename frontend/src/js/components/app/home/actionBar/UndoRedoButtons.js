import React from 'react';


const UndoRedoButtons = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div className="undo-redo-container">
    <div className="undo-redo-wrapper">
      <span className="button-name">Undo</span>
      <button className="mdl-button mdl-button--fab mdl-button--colored"
              onClick={onUndo}
              disabled={!canUndo}
      >
        <i className="material-icons">undo</i>
      </button>
    </div>
    <div className="undo-redo-wrapper">
    <span className="button-name">Redo</span>
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