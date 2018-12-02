import React from 'react';


const Content = ({ className, children }) => {
  return (
    <div className={className}>
      { children }
    </div>
  )
};

export default Content;