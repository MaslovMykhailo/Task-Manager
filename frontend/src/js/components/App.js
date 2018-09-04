import React from 'react';

import Footer from './Footer';
import MainContent from './MainContent';
import '../../css/app.css';

const App = () => {
  return (
    <div className={'app'}>
      <Footer/>
      <MainContent/>
    </div>
  )
};

export default App;