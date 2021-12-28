import React from 'react'

const Trending = () => {
    return (
        <section id = "trending" class = "">
           <div class = "mx-auto my-4 sm: max-w-4xl px-7">
               <p class = "text-3xl font-black">trending</p>

               <div class = "flex justify-between  space-x-10  my-3 w-full rounded-md border shadow-sm">
        
                    <img src = "/images/chocchip.jpg" class = "h-60 "></img>
                

                    <div class = "py-7 pr-12 flex flex-col space-y-4">
                        <p class = "text-3xl font-bold">chocolate chip cookies </p>
                        <p class = "text-xl">there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                

               </div>

           </div>
        </section>
    )
}

export default Trending
