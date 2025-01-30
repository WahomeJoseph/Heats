/* eslint-disable no-unused-vars */
import React from 'react'
import { API_KEY } from '../api/Api.js';
import Popular from '../components/Popular.jsx'
import { Vegan } from '../components/Vegan.jsx'
import Category from '../components/Category.jsx'

export default function Home() {
  const getRecipe = async () => {
    const results = await fetch(`https://api.spoonacular.com/recipes/random?number=4&tags=vegan&apiKey=${API_KEY}`)
    // https://api.spoonacular.com/recipes/random?number=6&apiKey=510fdfdcf64b4f6b837b94cce4fe8f27
    const data = await results.json()
    console.log(data)
  }
  getRecipe()

  // console.log('API Key:', API_KEY);

  return (
    <div>
        {/* <Popular /> */}
        <Category />
        <Vegan />
    </div>
  )
}
