import React from 'react';

import logo from '../../img/logo.svg';
import '../../css/logo.css';
import '../../css/header.css';


const Logo = () => {
  return (
    <div className={'top-small-wrapper logo'}>
      <h2>Tasks</h2>
      <img src={logo} alt={'logo'} />
    </div>
  )
};

export default Logo;