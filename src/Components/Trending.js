import React from 'react'
import {useState, useEffect} from 'react'
const Trending = () => {
    
    
    const[trending, setTrending] = useState([])
    
    useEffect(() =>{

        const getTrending = async () => {
            const trendingPosts = await fetchTrending(); 
            setTrending(trendingPosts.slice(0,8));
            console.log('result', trending)
        }

        getTrending()
        // fetchTrending()
    }, [])
    

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
        <section id = "trending" class = "">
           <div class = "mx-auto my-4 sm: max-w-4xl px-7">
                <p class = "text-3xl font-black"> what's trending?</p>

                <div class = "flex flex-wrap my-3 w-full">
                    {trending.map((post) => (
                        <TrendingPost img = {post.thumbnail_url} title = {post.name} id = {post.id}/>
                    ))}
                    
                </div>

           </div>
        </section>
    )
}

const TrendingPost = ({img, title, id}) => {
    return(
        <div className = "group flex flex-col w-20 sm:w-48 sm:mr-4 mb-2">
            <img src = {img} class = "h-24 w-24 rounded-md sm:h-48 sm:w-48 group-hover:scale-105 transition duration-500 group-hover:-translate-y-2 shadow-md group-hover:drop-shadow-xl"></img>
            <p class = "text-lg ml-1 my-2 font-semibold leading-tight group-hover:text-orange-500 transition duration-300">{title}</p>
        </div>
    )
}

export default Trending
