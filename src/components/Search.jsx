/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <div className="flex w-full justify-center bg-[#f7f4f3] p-6 mb-10">
      <form onSubmit={handleSubmit} className="flex w-full items-center gap-4 bg-white p-2 rounded shadow-sm">
        <FaSearch className="text-2xl text-[#5b2333]" />
        <input
          type="text"
          className="flex-grow-1 p-2 text-[#5b2333] border border-[5b2333] rounded outline-none focus:border-[#5b2333]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for your cuisines..."
        />
        <button type="submit" className="w-40 p-2 bg-[#5b2333] text-white rounded-md shadow-md hover-shadow-[#f7f4f3] cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
