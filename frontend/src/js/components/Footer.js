import React from 'react';

import '../../css/footer.css';


const Footer = ({ children }) => {
  return (
    <div className={'footer'}>
      { children }
    </div>
  )
};

export default Footer;