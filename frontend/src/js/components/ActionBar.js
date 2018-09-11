import React from 'react';

import SignOut from '../containers/SignOut';
import '../../css/main-content.css'


const ActionBar = () => {
  return (
    <div className={'bottom-small-wrapper'}>
      <SignOut/>
    </div>
  )
};

export default ActionBar;