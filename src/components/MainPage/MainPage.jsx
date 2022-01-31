import React from 'react';
import '../../App.scss';

import './MainPage.scss';
import LeftSideOptions from '../Coloums/LeftSideOptions.jsx';
import RightSideOptions from '../Coloums/RightSideOptions.jsx';
import CenterPage from '../Coloums/CenterPage.jsx';


function MainPage() {
  return (
    <div className="main-container">
      <div className="left-coloum">
        <LeftSideOptions />
      </div>
      <div className="center-coloum">
        <CenterPage />
      </div>
      <div className="right-coloum">
        <RightSideOptions />
      </div>
    </div>

  );
}

export default MainPage;