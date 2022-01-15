import React from 'react'
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Footer from './Footer'

const Recipe = () => {
    const params = useParams()
    const [recipe,setRecipe] = useState({})
    const [loading, setLoading] = useState(false)
    const [relatedRecipes, setRelatedRecipes] = useState([])
    const [relatedLoading, setRelatedLoading] = useState(false)
    
    useEffect(() => {
        
        const getRecipe = async () => {
            const recipeinfo = await fetchRecipe()
            setRecipe(recipeinfo)
            setLoading(true)
            const relatedrecipes = await fetchRelated(recipeinfo.tags[0].name)
            setRelatedRecipes(relatedrecipes.results)
            setRelatedLoading(true)
            console.log(relatedRecipes)
            
        
        }



        getRecipe()

    }, [])

    const fetchRecipe = async () =>{
        const res = await fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${params.id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tasty.p.rapidapi.com",
                "x-rapidapi-key": "a9fde64311msh9a1484e8fa684aep1c01d9jsnbff88337eac7"
            }
        })

        const data = await res.json()
        console.log(data)
        return data
    }

    const fetchRelated = async (tag) =>{
        const res = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=${tag}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tasty.p.rapidapi.com",
                "x-rapidapi-key": "a9fde64311msh9a1484e8fa684aep1c01d9jsnbff88337eac7"
            }
        })

        const data = await res.json()
        // console.log(data.results)
        return data
    }

    return (
        <div class = "flex flex-col mx-auto my-4 sm: max-w-4xl px-7 space-y-6">
            {loading && <>

            <div class = "flex flex-col space-y-3">

                {/*Title  */}
                <div class = "flex justify-between items-center">
                <p class = "text-3xl font-black title-3 tracking-wide ">{recipe.name}</p>
                <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-1 transition ease-in hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>
                </div>

                {/*Ratings & cooking time */}
                <div class = "flex items-center space-x-2">
                    {recipe.total_time_minutes != null &&
                    <div class = "flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        

                        <p class = "text-lg font-medium">{recipe.total_time_minutes} mins</p>
                    </div>
                    }

                    {recipe.user_ratings.score != null &&
                        <div class = "flex space-x-2">
                            <button class = "-translate-y-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition ease-in hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                            <p class = "text-lg font-medium">{(recipe.user_ratings.score * 5).toFixed(2)} </p>
                        </div>
                    }
                </div>


            </div>

            {/* Description */}
            {recipe.description != null &&
                <div class = "text-xl leading-tight">
                    <p>{recipe.description}</p>
                </div>
            }

            {/* Pic & Video */}
            <div class = "flex space-x-6">
                <img class = "h-80 w-80 rounded-md" src = {recipe.thumbnail_url}></img>
                <iframe class = "aspect-video rounded-md" src = {recipe.original_video_url}></iframe>
            </div>

            {/* Ingredients & Instructions */}
            <div class = "flex space-x-8 justify-evenly">
                
                {/* Ingredients */}
                <div class = "flex flex-col basis-1/3">
                    <p class = "title-3 text-xl">Ingredients</p>
                    <p class = "font-semibold">Serving - {recipe.num_servings}</p>
                    <ol class = "list-none">
                        {recipe.sections[0].components.map((instruction) => <li class = "leading-tight my-2">{instruction.raw_text}</li>
                                                )}
                    </ol>
                </div>

                {/* Instructions */}
                <div class = "flex flex-col basis-2/3">
                    <p class = "title-3 text-xl">Preparation</p>
                    <ol class = "list-decimal pl-4">
                        {recipe.instructions.map((instruction) => <li class = "leading-tight my-3">{instruction.display_text}</li>
                                                )}
                    </ol>
                </div>

            </div>

            
            
            <p class = "title-3 text-xl font-black"> more like this?</p>

            {relatedLoading && 
                                <div class = "flex flex-row space-x-2">
                                    {relatedRecipes.map((recipe) => <RelatedPost img = {recipe.thumbnail_url} title={recipe.name} id={recipe.id}/>)}
                                </div>
            }
            



            <Footer/>
            </>
            }
        </div>
    )
}

const RelatedPost = ({img, title, id}) => {
    return(
        <div className = "group flex flex-col w-20 sm:w-40 mb-2 ">
            <a href = {`/Recipe/${id}`}>
                <img src = {img} class = "h-24 w-24 rounded-md sm:h-40 sm:w-40 group-hover:scale-105 transition duration-500 group-hover:-translate-y-2 shadow-md group-hover:drop-shadow-xl"></img>
                <p class = "text-lg ml-1 my-2 font-semibold leading-tight group-hover:text-orange-500 transition duration-300">{title}</p>
            </a>
        </div>
    )
}

export default Recipe
