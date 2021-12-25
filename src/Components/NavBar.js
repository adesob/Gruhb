import React from 'react'

const NavBar = () => {
    return (
        <nav class = "bg-white border-b border-gray shadow-sm">
        <div class = "flex m-auto justify-between sm:max-w-5xl px-5 py-3">
          
          <div class = "flex pt-0.5 items-center space-x-1.5">
            <p id = "title" class = "text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-fuchsia-700 text-3xl font-bold tracking-wide">Gruhb</p>
            <img src = "/images/food.png" class = "h-8 w-8"></img>
          </div>

          <ul class = "flex space-x-8 items-center">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </li>
              
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <                 path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            </li>

            <li class = "">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
            </li>

            <li>
            {/* <img class="block mx-auto h-8 w-8 rounded-full sm:mx-0 sm:shrink-0" src="//www.explorewithola.com/wp-content/uploads/2020/09/rsz_1rsz_1img_6358.jpg" alt="Woman's Face"></img> */}
                <button type="button" class = " transition ease-in m-auto border-2 px-4 pt-0.5 rounded-full border-fuchsia-700 text-fuchsia-700 hover:text-orange-500 hover:border-orange-500 hover:scale-105">Log in</button>
            </li>
          </ul>
        </div>

      </nav>
    )
}

export default NavBar
