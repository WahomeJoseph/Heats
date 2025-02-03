/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function RecipeCard({ data }) {
  return (
    <Link to={'recipe/' + data.id} className='gap-4'>
      <motion.div
        className="flex flex-col relative rounded-lg transition-all duration-100 ease-in-out cursor-pointer my-5 text-white"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        animate={{ opacity: 1, y: 0 }} // Animate to visible
        transition={{ duration: 0.5, ease: 'linear' }}>
        <motion.img
          src={data.image}
          className="object-fit bg-center h-48 w-72 rounded-md shadow-sm hover:scale-95 shadow-[#5b2333]"
          alt={data.title}/> 
        <h2 className="px-4 text-center text-[#5b2333] text-base font-bold absolute bottom-0 truncate overflow-hidden whitespace-nowrap h-20 z-30 rounded-lg w-72 tracking-wide">
          {data.title}
        </h2>
        <div className="absolute h-48 w-72 p-6 opacity-[0.7] rounded-md bg-gradient-to-b from-transparent to-[#cccccc]"></div>
      </motion.div>
    </Link>
  );
}

RecipeCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};