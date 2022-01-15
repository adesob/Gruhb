import React from 'react'
import {Link} from 'react-router-dom'

const Latest = ({posts}) => {
    return (
        <section id = "latest" class = " ">
           <div class = "mx-auto my-4 sm: max-w-4xl px-7">
                <p className = "text-xl font-black title-3 tracking-wider"> what's new? </p>

                <div class = "flex flex-wrap my-3 w-full">
                    {posts.map((post) => (
                        <LatestPost img = {post.item.thumbnail_url} title = {post.item.name} id = {post.item.id}/>
                    ))}
                    
                </div>

           </div>
        </section>
    )
}

const LatestPost = ({img, title, id}) => {
    return(
        <div className = "group flex flex-col w-20 sm:w-48 sm:mr-4 mb-2">
            <Link to = {`/Recipe/${id}`}>
                <img src = {img} class = "h-20 w-24 rounded-md sm:h-48 sm:w-48 group-hover:scale-105 transition duration-500 group-hover:-translate-y-2 shadow-md group-hover:drop-shadow-xl"></img>
                <p class = "text-lg ml-1 my-2 font-semibold leading-tight group-hover:text-orange-500 transition duration-300">{title}</p>
            </Link>
        </div>

    )
}

export default Latest
