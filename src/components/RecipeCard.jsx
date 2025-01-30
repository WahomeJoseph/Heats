/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function RecipeCard({ data }) {
  return (
    <Link to={'recipe/' + data.id} className='gap-4'>
      {/* Wrap the container with motion.div and add animation props */}
      <motion.div
        className="flex flex-col relative rounded-lg transition-all duration-100 ease-in-out cursor-pointer my-5 text-white"
        initial={{ opacity: 0, y: 40 }} // Initial state (hidden)
        animate={{ opacity: 1, y: 0 }} // Animate to visible
        transition={{ duration: 0.3, ease: 'linear' }}>
        <img
          src={data.image}
          className="object-cover h-48 w-72 rounded-lg"
          alt={data.title}/> 
        <h2 className="px-4 absolute bottom-0 truncate overflow-hidden whitespace-nowrap h-20 z-30 rounded-lg w-72 tracking-wide">
          {data.title}
        </h2>
        <div className="absolute h-48 w-72 rounded-lg bg-gradient-to-t from-transparent to-black"></div>
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