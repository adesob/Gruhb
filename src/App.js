import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import SplashPage from'./Components/SplashPage'
import NavBar from'./Components/NavBar'
import Trending from './Components/Trending'
import Latest from './Components/Latest'
import Footer from './Components/Footer'
import Recipe from './Components/Recipe'

function App() {
  const [show, setShow] = useState(true) //state of the splash page
  
  const [trending, setTrending] = useState([]) //trending list state
  const [latest, setLastest] = useState([]) //lastest recipes list state
  const [loadingState, setLoadingState] = useState(false) //if trending list has been loaded 
  
  
  
  
  useEffect(() => {

    if(show == true){
      const getTrending = async () => {
        const trendingPosts = await fetchTrending(); 
        
        setTrending(trendingPosts[2].items.slice(0,8));

        setLastest(trendingPosts.slice(16,24));

        setLoadingState(true);
        // console.log('result', trending)
      }

      getTrending()

      const timeId = setTimeout(() => {
        // Time for Splash page component
        setShow(false)
        console.log(show)
      }, 2500)

      return () => {
        clearTimeout(timeId)
      }
    }
  }, []);
  
  const fetchTrending = async () => {
    const res = await fetch("https://tasty.p.rapidapi.com/feeds/list?size=50&timezone=%2B0700&vegetarian=false&from=0", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "9596fddf2amsh59f445648c4a937p17acf4jsn76a4bed7687f"
        }
    });
    const data = await res.json();
    const output = await data.results
    // console.log(output)

    return output
  }
  

  return (
    <Router>
      <div className="App">
        
        {/* Loading Page */}
        {/* {!show && <NavBar/>} */}

        
        
        
        <Routes>
          <Route path='/' element = {
            <>
              {show && <SplashPage/>}
              {!show && <NavBar/>} 
              {!show && loadingState && <Trending posts = {trending}/>}
              {!show && loadingState && <Latest posts = {latest}/>}
              {!show && loadingState && <Footer/>}
            </>}
          />

          <Route path ='/Recipe/:id' element = {<><NavBar/><Recipe/></>}/>
        </Routes>
      </div>
    </Router>
  );

  
}

export default App;
