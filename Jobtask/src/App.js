import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Rside from './components/Rside';

function App() {
  return (
    <>
      <div className='l-side'>
        <NavBar />
        <Home />
      </div>
      <div className='r-side'>
        <Rside />
      </div>

    </>
  );
}

export default App;
