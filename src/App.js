import React from 'react';

import './App.css';
import Header from './parts/Header';
import Homepage from '../src/scenes/Homepage';
import Testimony from '../src/scenes/Testimony';
import Help from '../src/scenes/Help';
import Footer from './parts/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Homepage />
        <Testimony />
        <Help />
        <Footer />
    </div>
  );
}

export default App;
