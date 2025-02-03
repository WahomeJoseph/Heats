/* eslint-disable no-unused-vars */
import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { GiAfrica, GiItalia } from "react-icons/gi";

export default function Category() {
  return (
    <div className="mt-0 p-4 flex gap-12 justify-center w-full rounded overflow-x-auto">
      <NavLink to={'/cuisine/African'} className="flex flex-col justify-center items-center bg-[#000000] text-[#f7f4f3] rounded-full p-2 h-30 w-30 cursor-pointer border shadow-md shadow-[#5438dc] transition-all duration-100 ease-in-out hover:scale-95 hover:bg-[#5438dc]">
        <GiAfrica className='text-2xl' />
        <span className='text-[#f7f4f3]'>African</span>
      </NavLink>
      <NavLink to={'/cuisine/Italian'} className="flex flex-col justify-center items-center bg-[#000000] text-[#f7f4f3] rounded-full p-2 h-30 w-30 cursor-pointer border shadow-md shadow-[#5438dc] transition-all duration-100 ease-in-out hover:scale-95 hover:bg-[#5438dc]">
        <GiItalia />
        <p>Italian</p>
      </NavLink>
      <NavLink to={'/cuisine/Indian'} className="flex flex-col justify-center items-center bg-[#000000] text-[#f7f4f3] rounded-full p-2 h-30 w-30 cursor-pointer border shadow-md shadow-[#5438dc] transition-all duration-100 ease-in-out hover:scale-95 hover:bg-[#5438dc]">
        <FaPizzaSlice />
        <p>Indian</p>
      </NavLink>
      <NavLink to={'/cuisine/American'} className="flex flex-col justify-center items-center bg-[#000000] text-[#f7f4f3] rounded-full p-2 h-30 w-30 cursor-pointer border shadow-md shadow-[#5438dc] transition-all duration-100 ease-in-out hover:scale-95 hover:bg-[#5438dc]">
        <FaHamburger />
        <p>American</p>
      </NavLink>
      <NavLink to={'/cuisine/Thai'} className="flex flex-col justify-center items-center bg-[#000000] text-[#f7f4f3] rounded-full p-2 h-30 w-30 cursor-pointer border shadow-md shadow-[#5438dc] transition-all duration-100 ease-in-out hover:scale-95 hover:bg-[#5438dc]">
        <GiNoodles />
        <p>Thai</p>
      </NavLink>
      <NavLink to={'/cuisine/Chinese'} className="flex flex-col justify-center items-center bg-[#000000] text-[#f7f4f3] rounded-full p-2 h-30 w-30 cursor-pointer border shadow-md shadow-[#5438dc] transition-all duration-100 ease-in-out hover:scale-95 hover:bg-[#5438dc]">
        <GiChopsticks />
        <p>Chinese</p>
      </NavLink>
    </div>
  );
}
