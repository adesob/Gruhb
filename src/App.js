import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import './App.css';
import SplashPage from'./Components/SplashPage'
import NavBar from'./Components/NavBar'
import Trending from './Components/Trending'

function App() {
  const [show, setShow] = useState(true)
  
  
  useEffect(() => {
    const timeId = setTimeout(() => {
      // Time for Splasp page component
      setShow(false)
      console.log(show)
    }, 2500)

    return () => {
      clearTimeout(timeId)
    }
  }, []);
  

  

  return (
    <div className="App">
      
      {/* Loading Page */}
      {show && <SplashPage/>} 
      
      {!show && <NavBar/>}
      {!show && <Trending/>}
    </div>
  );

  
}

export default App;
