import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Trending = ({posts}) => {

    return (
        <section id = "trending" class = " ">
           <div class = "mx-auto my-4 sm: max-w-4xl px-7">
                <p class = "text-xl font-black title-3 tracking-wide"> what's trending?</p>

                <div class = "flex flex-wrap my-3 w-full">
                    {posts.map((post) => (
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
            <Link to = {`/Recipe/${id}`}>
                <img src = {img} class = "h-24 w-24 rounded-md sm:h-48 sm:w-48 group-hover:scale-105 transition duration-500 group-hover:-translate-y-2 shadow-md group-hover:drop-shadow-xl"></img>
                <p class = "text-lg ml-1 my-2 font-semibold leading-tight group-hover:text-orange-500 transition duration-300">{title}</p>
            </Link>
        </div>
    )
}

export default Trending
