import React from 'react';

import logo from '../../img/logo.svg';
import '../../css/logo.css';

const Logo = () => {
  return (
    <div className={'logo-wrapper'}>
      <span>Tasks</span>
      <img src={logo} alt={logo} />
    </div>
  )
};

export default Logo;