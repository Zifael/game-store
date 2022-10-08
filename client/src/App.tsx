import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Routers from './Components/Router/Routers';




function App() {
  
  
 
  return (
    <div className="App">
      <NavBar />
      <Routers />
    </div>
  );
}

export default App;
