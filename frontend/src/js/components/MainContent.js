import React from 'react';

import '../../css/main-content.css';
import CreatorChip from './CreatorChip';
import SignIn from '../containers/SignIn';

const MainContent = () => {
  return (
    <div className={'main-content'}>
      <div className={'info'}>
        <CreatorChip/>
      </div>
      <div className={'description'}>
        <SignIn/>
      </div>
    </div>
  )
};

export default MainContent;