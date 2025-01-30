import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard.jsx";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { Skeleton } from "@mui/material";

export const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
      const getPopular = async ()=>{
        const check = localStorage.getItem('popular')
        if (!check) {
          setPopular(JSON.parse(check))
        }
        else{
          try {
            const result = await fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=510fdfdcf64b4f6b837b94cce4fe8f27`)
            const data = await result.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data)
          } catch (error) {
            console.log(error)
          }
        }
      }
      getPopular()
    }, [])

    if (popular.length === 0) {
      const number = [1,2,3,4,5,6,7,8,9,10]
      return(
        <Splide options= {{
          perPage: 4,
          pagination: false,
          gap: '2rem'
      }}>
          {number.map((data) => (
          <SplideSlide key={data} >
              <Skeleton height={200} width={300} />
          </SplideSlide>
      ))}
      </Splide>
      )
    }

    return (
        <div className="popular-container">
            <h1 className="bg-blue-600">Popular Choices </h1>
            <Splide options={{
                perPage: 4,
                pagination: false,
                gap: '2rem',
            }}>
            {popular.map((recipe) => (
                <SplideSlide key={recipe.id}>
                    <RecipeCard data={recipe} />
                </SplideSlide>
            ))}
            </Splide>
        </div>
    )
}
