import React from 'react';


const UndoRedoButtons = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div className="undo-redo-container">
    <button id="undo"
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
            onClick={onUndo}
            disabled={!canUndo}
    >
      <i className="material-icons">undo</i>
    </button>
    <div className="mdl-tooltip mdl-tooltip--top" htmlFor="undo">Undo</div>
    <button id="redo"
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
            onClick={onRedo}
            disabled={!canRedo}
    >
      <i className="material-icons">redo</i>
    </button>
    <div className="mdl-tooltip mdl-tooltip--top" htmlFor="redo">Redo</div>
  </div>
);

export default UndoRedoButtons;