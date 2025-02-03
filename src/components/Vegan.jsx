import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {API_KEY} from '../api/Api.js'
import '@splidejs/splide/dist/css/splide.min.css';
import { Skeleton } from "@mui/material";

const Vegan = () => {
    const [veganRecipe, setVeganRecipe] = useState([])

    useEffect(() => {
        const getVegan = async () => { 
            const check = localStorage.getItem('vegan');
            if(check) {
                setVeganRecipe(JSON.parse(check));
            }
            else {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?number=12&tags=vegan&apiKey=${API_KEY}`);
                const data = await api.json();
                localStorage.setItem('vegan', JSON.stringify(data.recipes));
                console.log(data);
                setVeganRecipe(data?.recipes);
            }
        }
        getVegan();
    },[]);

    if(veganRecipe.length === 0) {
        const number = [1,2,3,4,5,6,7,8,9,10,11,12];
        return (
            <Splide options={{
                perPage: 4,
                pagination: false,
                gap: '1rem',
                breakpoints: {
                    640: { perPage: 1, gap: '1rem' },
                    768: { perPage: 2, gap: '1rem' },
                    1024: { perPage: 3, gap: '1rem' },
                }
            }}>
                {number.map((data) => (
                <SplideSlide key={data}>
                    <Skeleton variant="rounded" animation="wave" height={200} width={400} />
                </SplideSlide>
            ))}
            </Splide>
        )
    }

    return (
        <div className="flex flex-col p-8 bg-transparent w-full">
            <h1 className="text-2xl font-bold text-center shadow-inline hover:shadow-inline">Vegan Picks <span className="text-[#5438dc]">(Non-Meat)</span></h1>
            <Splide options={{
                perPage: 4,
                pagination: false,
                gap: '1rem',
                breakpoints: {
                    640: { perPage: 1, gap: '1rem' },
                    768: { perPage: 2, gap: '1rem' },
                    1024: { perPage: 3, gap: '1rem' },
                }
                
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