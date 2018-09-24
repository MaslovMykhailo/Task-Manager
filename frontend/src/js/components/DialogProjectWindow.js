import React from 'react';

import '../../css/popup-window.css';
import Colors from '../constants/Colors';


const DialogProjectWindow = () => {
  const colorsDiv = Object.keys(Colors).map(color => (
    <div key={color} style={{backgroundColor: Colors[color].RGB}}/>
  ));
  
  return (
    <div className={'popup-window mdl-card mdl-shadow--2dp'}>
      <div className="mdl-card__title mdl-card--border">
        <h1 className="mdl-card__title-text">Create project menu</h1>
      </div>
      <div className="mdl-card__supporting-text">
        Project name<br/>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id='project-name'/>
          </div>
      </div>
      <div className="mdl-card__supporting-text">
        Project description<br/>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id='project-description'/>
        </div>
      </div>
      <div className="mdl-card__supporting-text">
        Card color
      </div>
      <div className={'color-container'}>
        {colorsDiv}
      </div>
      <button className="close mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i className="material-icons">close</i>
      </button>
      <button className="mdl-button mdl-js-button mdl-button--raised
                         mdl-js-ripple-effect mdl-button--accent"
              id={'save-button'}>
        Create
      </button>
    </div>
  )
};

export default DialogProjectWindow;