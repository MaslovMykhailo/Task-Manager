import React, { Component } from 'react';

import Colors from '../../../constants/Colors';


class DialogProjectWindow extends Component {
  constructor(props) {
    super(props);

    const { config } = props;

    let checkedColor = undefined;
    if (config.colors) {
      checkedColor = config.colors.checkedColor || 'teal';
    }

    this.state = {
      fieldsValue: config.fields.map(f => f.value || ''),
      validClassNameForFields: config.fields.map(f => {
        if (f.withValidation) {
          return f.value ? ' incorrect_hidden' : ' incorrect_visible';
        } else {
          return undefined;
        }
      }),
      checkedColor
    };

    this.handleChangeCardColor = this.handleChangeCardColor.bind(this);
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  validateInput(input) {
    return input.replace(/\s+/, "").replace(/\s{2,}/g,' ').length > 0;
  }

  handleChangeField(index) {
    return (event) => {
      const editedFieldsValue = this.state.fieldsValue.slice();
      const editedClassNameForFields = this.state.validClassNameForFields.slice();

      const value = event.target.value;
      const className = this.validateInput(value) ? ' incorrect_hidden' : ' incorrect_visible';

      editedFieldsValue[index] = value;
      if (editedClassNameForFields[index]) {
        editedClassNameForFields[index] = className;
      }

      this.setState({
        fieldsValue: editedFieldsValue,
        validClassNameForFields: editedClassNameForFields
      });
    }
  }

  handleChangeCardColor(changedColor) {
    return () => {
      this.setState({
        checkedColor: changedColor
      })
    }
  }

  render() {
    const { state, handleChangeField, validateInput, handleChangeCardColor } = this;
    const { closeHandler, config } = this.props;
    const saveHandler = this.props[config.saveHandlerName];

    const serializedData = {};
    config.fields.forEach((field, i) => {
      serializedData[field.serializeTo] = state.fieldsValue[i]
    });
     if (config.otherData) {
       config.otherData.forEach(data => {
         serializedData[data.serializeTo] = data.value;
       });
     }
    if (state.checkedColor) serializedData[config.colors.serializeTo] = state.checkedColor;

    const saveButtonOnClick = () => {
      for (let value in state.fieldsValue) {
        if (!validateInput(value)) return;
      }

      closeHandler();
      saveHandler(serializedData);
    };

    const { fieldsValue, validClassNameForFields, checkedColor } = state;

    const colorsDiv = !checkedColor ? null : Object.keys(Colors).map(color => (
      <div key={color}
           style={{backgroundColor: Colors[color].RGB}}
           className={color === checkedColor ? 'active': ''}
           onClick={handleChangeCardColor(color)}
      />
    ));

    const fields = config.fields.map((field, i) => {
      return (
        <div className="mdl-card__supporting-text" key={field.name+i}>
          {field.name}
          {
            field.withValidation ?
              <span className={'incorrect' + validClassNameForFields[i]}>
                Incorrect!
              </span> :
              null
          }
          <br/>
          <div className="mdl-textfield">
            <input className="mdl-textfield__input"
                   type="text"
                   value={ fieldsValue[i] }
                   onChange={ handleChangeField(i) }
            />
          </div>
        </div>
      )
    });

    return (
      <div className={'popup-window mdl-card mdl-shadow--2dp'}>

        <div className="mdl-card__title mdl-card--border">
          <h1 className="mdl-card__title-text">
            { config.windowTitle }
          </h1>
        </div>

        {fields}

        {
          config.colors ?
            <div className="mdl-card__supporting-text">
              { config.colors.title }
            </div> :
            null
        }
        <div className={'color-container'}>
          { colorsDiv }
        </div>

        <button className="close mdl-button mdl-button--icon"
                onClick={ closeHandler }
        >
          <i className="material-icons">cancel</i>
        </button>

        <button className="mdl-button mdl-button--raised mdl-button--accent"
                id={'save-button'}
                onClick={ saveButtonOnClick }
        >
          { config.saveButtonText }
        </button>
      </div>
    )
  }
}

export default DialogProjectWindow;