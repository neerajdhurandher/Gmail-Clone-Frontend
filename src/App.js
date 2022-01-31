import React from 'react';
import './App.scss';

import Navbar from './components/Navbar/Nav.jsx';
import MainPage from './components/MainPage/MainPage.jsx';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainPage/>
    </div>
  );
}

export default App;
