import React from 'react';

import logo from '../../img/logo.svg';
import '../../css/logo.css';

const Logo = () => {
  return (
    <div className={'logo-wrapper'}>
      <h2>Tasks</h2>
      <img src={logo} alt={'logo'} />
    </div>
  )
};

export default Logo;