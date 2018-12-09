import React from 'react';


const PositionField = props => {
  const { currentValue, minValue, maxValue, changeValueHandler, incValue, decValue, title } = props;

  let value = currentValue;
  if (value === maxValue) value = 'last';
  if (value === minValue) value = 'first';

  return (
    <div className={'position-field'}>
      {title}
      <br/>
      <div className="mdl-textfield">
        <input className="mdl-textfield__input"
               type="text"
               value={value}
               onChange={changeValueHandler}
        />
      </div>
      <button className="mdl-button mdl-js-button mdl-button--icon"
              disabled={currentValue === minValue}
              onClick={decValue}
      >
        <i className="material-icons">remove_circle</i>
      </button>
      <button className="mdl-button mdl-js-button mdl-button--icon"
              disabled={currentValue === maxValue}
              onClick={incValue}
      >
        <i className="material-icons">add_circle</i>
      </button>
    </div>
  );
};

export default PositionField;