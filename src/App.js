import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import './App.css';
import SplashPage from'./Components/SplashPage'
import NavBar from'./Components/NavBar'
import Trending from './Components/Trending'

function App() {
  const [show, setShow] = useState(true)
  const [trdnrep, setTrdnrep] = useState([])
  const[trending, setTrending] = useState([])
  const[trendingState, setTrendingState] = useState(false)
  
  useEffect(() => {

    const getTrending = async () => {
      const trendingPosts = await fetchTrending(); 
      setTrending(trendingPosts.slice(0,8));
      setTrendingState(true);
      console.log('result', trending)
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
  }, []);
  
  const fetchTrending = async () => {
    const res = await fetch("https://tasty.p.rapidapi.com/feeds/list?size=2&timezone=%2B0700&vegetarian=false&from=0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "4b2aa70226msh86a252cadbae61ep1ee408jsne2ce7af60c33"
        }
    });
    const data = await res.json();
    const output = await data.results[2].items
    console.log(output)

    return output
  }
  

  return (
    <div className="App">
      
      {/* Loading Page */}
      {show && <SplashPage/>} 
      
      {!show && <NavBar/>}
      {!show && trendingState && <Trending posts = {trending}/>}
    </div>
  );

  
}

export default App;
