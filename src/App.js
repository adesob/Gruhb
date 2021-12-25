import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import './App.css';
import SplashPage from'./Components/SplashPage'
import NavBar from'./Components/NavBar'

function App() {
  const [show, setShow] = useState(true)

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
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
    </div>
  );

  
}

export default App;
