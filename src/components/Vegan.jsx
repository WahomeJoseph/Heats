import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Skeleton } from "@mui/material";

export function Vegan (){

    const API_KEY = '5fbac6abaac6414ca2c64871fbbe9405';
    const [vegan, setVegan] = useState([]);

    useEffect(() => {
        const getVegan = async () => { 
            const check = localStorage.getItem('vegan');
            if(check) {
                setVegan(JSON.parse(check));
            }
            else {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?number=10&tags=vegan&apiKey=${API_KEY}`);
                const data = await api.json();
                localStorage.setItem('vegan', JSON.stringify(data.recipes));
                console.log(data);
                setVegan(data?.recipes);
            }
        }
        getVegan();
    },[]);

    if(vegan.length === 0) {
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
            {vegan.map((recipe) => (
                <SplideSlide key={recipe.id}>
                    <RecipeCard data={recipe} />
                </SplideSlide>
            ))}
            </Splide>
        </div>
    )
}

export default Vegan