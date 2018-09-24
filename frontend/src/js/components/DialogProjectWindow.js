import React, { Component } from 'react';

import '../../css/popup-window.css';
import Colors from '../constants/Colors';


class DialogProjectWindow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      projectNameValue: props.projectName || '',
      projectDescriptionValue: props.projectDescription || '',
      cardColor: props.cardColor || 'teal',
      colorsDiv: Object.keys(Colors).map(color => (
        <div key={color}
             style={{backgroundColor: Colors[color].RGB}}
             className={color === (props.cardColor || 'teal') ? 'active': ''}
             onClick={this.handleChangeCardColor(color)}
        />
      ))
    };
  
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCardColor = this.handleChangeCardColor.bind(this);
    
    this.buttonText = props.type === 'create' ? 'Create' : 'Edit';
    this.title = this.buttonText + ' project menu';
  }
  
  handleChangeName(event) {
    this.setState({ projectNameValue: event.target.value });
  }
  
  handleChangeDescription(event) {
    this.setState({ projectDescriptionValue: event.target.value });
  }
  
  handleChangeCardColor(changedColor) {
    return () => {
      this.setState({
        cardColor: changedColor,
        colorsDiv: Object.keys(Colors).map(color => (
          <div key={color}
               style={{backgroundColor: Colors[color].RGB}}
               className={color === changedColor ? 'active': ''}
               onClick={this.handleChangeCardColor(color)}
          />
        ))
      })
    }
  }
  
  render() {
    const { title, buttonText, state, handleChangeName, handleChangeDescription } = this;
    const { projectNameValue, projectDescriptionValue, colorsDiv } = state;
    
    return (
      <div className={'popup-window mdl-card mdl-shadow--2dp'}>
        
        <div className="mdl-card__title mdl-card--border">
          <h1 className="mdl-card__title-text">
            {title}
          </h1>
        </div>
        
        <div className="mdl-card__supporting-text">
          Project name<br/>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input"
                   type="text"
                   id='project-name'
                   value={projectNameValue}
                   onChange={handleChangeName}
            />
          </div>
        </div>
        
        <div className="mdl-card__supporting-text">
          Project description<br/>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input"
                   type="text"
                   id='project-description'
                   value={projectDescriptionValue}
                   onChange={handleChangeDescription}
            />
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
        
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                id={'save-button'}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default DialogProjectWindow;