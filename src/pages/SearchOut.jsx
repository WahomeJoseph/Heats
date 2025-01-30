import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { API_KEY } from "../api/Api.js";
import { Skeleton } from "@mui/material";

const SearchOut = () => {
    const [searchRecipes, setSearchRecipes] = useState([]);
    const params = useParams();
    useEffect(() => {
        const getRecipe = async () => {
            const result = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${params.name}&apiKey=${API_KEY}`);
            const data = await result.json();
            console.log("API Key:", API_KEY);

            setSearchRecipes(data.results)
            console.log(data.results)
        }

        getRecipe()
    }, [params.name])

    if(searchRecipes.length === 0) {
        const number = [1,2,3,4,5,6,7,8,9,10];
        return (
        <div className="cuisine-skeleton">
        {
            number.map((data) => (
                <Skeleton 
                    variant="rounded"
                    width={300}
                    height={200}
                    animation='wave'
                    key={data}
                />))
        }
        </div> 
    )}

    return (
        <div className="flex flex-wrap justify-center gap-6 p-8 mt-6">
            {searchRecipes.map((data) => (
                <RecipeCard data={data} key={data.id} />
            ))}
        </div>
    )
}

export default SearchOut;