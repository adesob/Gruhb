import React from 'react'
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

const Recipe = () => {
    const params = useParams()
    const [recipe,setRecipe] = useState({})
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        
        const getRecipe = async () => {
            const recipeinfo = await fetchRecipe()
            setRecipe(recipeinfo)
            setLoading(true)
        }

        getRecipe()  

    }, [])

    const fetchRecipe = async () =>{
        const res = await fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${params.id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tasty.p.rapidapi.com",
                "x-rapidapi-key": "9596fddf2amsh59f445648c4a937p17acf4jsn76a4bed7687f"
            }
        })

        const data = await res.json()
        // console.log(data)
        return data
    }

    return (
        <div class = "flex flex-col center-items mx-auto my-4 sm: max-w-4xl px-7 border ">

           <p class = "">{recipe.name}</p>
           <Link to = "/">Go Back</Link>
        </div>
    )
}

export default Recipe
