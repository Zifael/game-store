import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Routers from './Components/Router/Routers';




function App() {
  
  
  const getJwt = async () => {
    const {data} = await axios.get(`/token`)  
    console.log(data)
  }
  getJwt()


  const getFood = async () => {
    const {data} = await axios.get('/food')
    console.log(data)
  }
  getFood()
  return (
    <div className="App">
      <NavBar />
      <Routers />
    </div>
  );
}

export default App;
