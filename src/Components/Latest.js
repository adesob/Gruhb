import React from 'react'

const Latest = ({posts}) => {
    return (
        <section id = "latest" class = " ">
           <div class = "mx-auto my-4 sm: max-w-4xl px-7">
                <p class = "text-3xl font-black"> latest </p>

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
            <img src = {img} class = "h-24 w-24 rounded-md sm:h-48 sm:w-48 group-hover:scale-105 transition duration-500 group-hover:-translate-y-2 shadow-md group-hover:drop-shadow-xl"></img>
            <p class = "text-lg ml-1 my-2 font-semibold leading-tight group-hover:text-orange-500 transition duration-300">{title}</p>
        </div>
    )
}

export default Latest
