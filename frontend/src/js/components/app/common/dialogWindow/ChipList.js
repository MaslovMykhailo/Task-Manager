import React from 'react';

import Colors from "../../../../constants/Colors";


const ChipList = props => {
  const { title, itemList, checkedItemIndex, onClickHandler } = props;

  const chipList = itemList.map((item, i) => (
    <button type="button"
            className={'mdl-chip' + (i === checkedItemIndex ? ' checked-chip-item' : '')}
            onClick={onClickHandler(i)}
            style={{backgroundColor: Colors[item.color].RGB}}
            key={i}
    >
      <span className="mdl-chip__text">{item.value}</span>
    </button>
  ));

  return (
    <div className={'chip-list'}>
      <span className={'chip-list-title'}>{title}</span>
      <div className={'chip-list-content'}>
        {chipList}
      </div>
    </div>
  )
};

export default ChipList;