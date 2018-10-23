import React from 'react';

import UndoRedo from '../../../../containers/home/UndoRedo';
import SignOut from '../../../../containers/home/SignOut';


const ActionBar = () => {
  return (
    <div className={'bottom-small-wrapper action-bar'}>
      <SignOut/>
      <UndoRedo/>
    </div>
  )
};

export default ActionBar;