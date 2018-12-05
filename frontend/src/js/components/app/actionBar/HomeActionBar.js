import React from 'react';

import UndoRedoCards from '../../../containers/home/UndoRedoCards';
import SignOut from '../../../containers/home/SignOut';


const HomeActionBar = () => {
  return (
    <div className={'bottom-small-wrapper action-bar'}>
      <SignOut/>
      <UndoRedoCards/>
    </div>
  )
};

export default HomeActionBar;