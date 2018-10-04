import React from 'react';

import UndoRedo from '../../../../containers/home/UndoRedo';
import SignOut from '../../../../containers/home/SignOut';
import '../../../../../css/main-content.css';
import '../../../../../css/action-bar.css';


const ActionBar = () => {
  return (
    <div className={'bottom-small-wrapper action-bar'}>
      <SignOut/>
      <UndoRedo/>
    </div>
  )
};

export default ActionBar;