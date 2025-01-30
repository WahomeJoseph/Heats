/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Search from './components/Search'
// import Category from './components/Category'
import SearchOut from './pages/SearchOut'
import Recipe from './pages/Recipe'
import Cuisine from './pages/Cuisine'

export default function App() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' element={[<Search key='search' />, <Home key='home' />]} />
        <Route path="/cuisine/:type" element={[<Search key='search' />, <Cuisine key='cuisine' />]} />
        <Route path="/searchout/:search" element={[<Search key='search' />,  <SearchOut key='searchout' />]} />
        <Route path="/searchout/:search/recipe/:name" element={<Recipe />} />
        <Route path="/cuisine/:type/recipe/:name" element={<Recipe />} />
        <Route path="recipe/:name" element={<Recipe />} />
        {/* <Route path='cuisine/:type' element={[<Cuisine key='cuisine'/>]}/> */}
      </Routes>
    </main>
  )
}
