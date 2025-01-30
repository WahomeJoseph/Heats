import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {API_KEY} from '../api/Api.js'
import '@splidejs/splide/dist/css/splide.min.css';
import { Skeleton } from "@mui/material";

export function Vegan (){
    const [veganRecipe, setVeganRecipe] = useState([])

    useEffect(() => {
        const getVegan = async () => { 
            const check = localStorage.getItem('vegan');
            if(check) {
                setVeganRecipe(JSON.parse(check));
            }
            else {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?number=10&tags=vegan&apiKey=${API_KEY}`);
                const data = await api.json();
                localStorage.setItem('vegan', JSON.stringify(data.recipes));
                console.log(data);
                setVeganRecipe(data?.recipes);
            }
        }
        getVegan();
    },[]);

    if(veganRecipe.length === 0) {
        const number = [1,2,3,4,5,6,7,8,9,10];
        return (
            <Splide options={{
                perPage: 4,
                pagination: false,
                gap: '2rem'
            }}>
                {number.map((data) => (
                <SplideSlide key={data}>
                    <Skeleton height={200} width={300} />
                </SplideSlide>
            ))}
            </Splide>
        )
    }

    return (
        <div className="veggie-container">
            <h1>Veggie Picks </h1>
            <Splide options={{
                perPage: 4,
                pagination: false,
                gap: '2rem',
            }}>
            {veganRecipe.map((recipe) => (
                <SplideSlide key={recipe.id}>
                    <RecipeCard data={recipe} />
                </SplideSlide>
            ))}
            </Splide>
        </div>
    )
}

export default Vegan