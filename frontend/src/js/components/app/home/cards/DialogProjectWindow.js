import React, { Component } from 'react';

import Colors from '../../../../constants/Colors';


class DialogProjectWindow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      projectNameValue: props.name || '',
      projectDescriptionValue: props.description || '',
      cardColor: props.cardColor || 'teal',

      validClassNameForName: props.name ? ' incorrect_hidden' : ' incorrect_visible',
    };
  
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCardColor = this.handleChangeCardColor.bind(this);
  }
  
  validateInput(input) {
    return input.replace(/\s+/, "").replace(/\s{2,}/g,' ').length > 0;
  }
  
  handleChangeName(event) {
    const value = event.target.value;
    const className = this.validateInput(value) ? ' incorrect_hidden' : ' incorrect_visible';
    
    this.setState({
      projectNameValue: value,
      validClassNameForName: className
    });
  }
  
  handleChangeDescription(event) {
    const value = event.target.value;

    this.setState({
      projectDescriptionValue: value,
    });
  }
  
  handleChangeCardColor(changedColor) {
    return () => {
      this.setState({
        cardColor: changedColor
      })
    }
  }
  
  render() {
    const { state, props, handleChangeName, handleChangeDescription, validateInput, handleChangeCardColor } = this;
    const {
      projectNameValue, projectDescriptionValue,
      cardColor, validClassNameForName
    } = state;
    const { createProject, editProject, closeWindow, type, id } = props;
  
    const buttonText = type === 'create' ? 'Create' : 'Edit';
    const title = buttonText + ' project menu';
    
    const projectConfig = {
      name: projectNameValue,
      description: projectDescriptionValue,
      cardColor,
      id
    };
    
    const onClickHandler = type === 'create' ?
      createProject(projectConfig) : editProject(projectConfig);
    
    const saveButtonOnClick = () => {
      let inputIsValid = validateInput(projectNameValue);
      
      if (inputIsValid) {
        closeWindow();
        onClickHandler();
      }
    };

    const colorsDiv = Object.keys(Colors).map(color => (
      <div key={color}
           style={{backgroundColor: Colors[color].RGB}}
           className={color === (cardColor || 'teal') ? 'active': ''}
           onClick={handleChangeCardColor(color)}
      />
    ));
    
    return (
      <div className={'popup-window mdl-card mdl-shadow--2dp'}>
        
        <div className="mdl-card__title mdl-card--border">
          <h1 className="mdl-card__title-text">
            { title }
          </h1>
        </div>
        
        <div className="mdl-card__supporting-text">
          Project name
          <span className={'incorrect' + validClassNameForName}>Incorrect name!</span>
          <br/>
          <div className="mdl-textfield">
            <input className="mdl-textfield__input"
                   type="text"
                   id='project-name'
                   value={ projectNameValue }
                   onChange={ handleChangeName }
            />
          </div>
        </div>
        
        <div className="mdl-card__supporting-text">
          Project description
          <br/>
          <div className="mdl-textfield">
            <input className="mdl-textfield__input"
                   type="text"
                   id='project-description'
                   value={ projectDescriptionValue }
                   onChange={ handleChangeDescription }
            />
          </div>
        </div>
        
        <div className="mdl-card__supporting-text">
          Card color
        </div>
        <div className={'color-container'}>
          { colorsDiv }
        </div>
        
        <button className="close mdl-button mdl-button--icon"
                onClick={ closeWindow }
        >
          <i className="material-icons">close</i>
        </button>
        
        <button className="mdl-button mdl-button--raised mdl-button--accent"
                id={'save-button'}
                onClick={ saveButtonOnClick }
        >
          { buttonText }
        </button>
      </div>
    )
  }
}

export default DialogProjectWindow;