/* eslint-disable no-unused-vars */
import React from 'react'
import { GiSpoon } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { BiSolidUserCircle } from 'react-icons/bi'

export default function Header() {
  return (
    <div className="flex flex-row bg-[#f7f4f3] text-[#fffff] p-6 justify-between shadow-md shadow-[#5b2333]">
      <Link to={'/'}>
        <h1 className="flex items-center text-2xl font-semibold gap-1.25 hover:text-[#5438dc] font-satisfy">
          All Recipes
          <GiSpoon />
        </h1>
      </Link>
      <BiSolidUserCircle className="text-4xl font-bold bg-transparent hover:text-[#5438dc] cursor-pointer" />
    </div>
  )
}
