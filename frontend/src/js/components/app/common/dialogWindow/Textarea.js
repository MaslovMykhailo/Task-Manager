import React from 'react';


const Textarea = ({ title, value, changeValueHandler }) => (
  <div className="popup-textarea mdl-textfield">
    { title }
    <br/>
    <textarea className="mdl-textfield__input"
              type="text"
              rows="3"
              onChange={changeValueHandler}
              value={value}
    >
    </textarea>
  </div>
);

export default Textarea;