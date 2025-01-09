// src/components/Search.js
import React, { useState } from 'react';
import "./search-component.scss"

const Search = ({ onSearch }) =>
{
    const [query, setQuery] = useState('');

    const handleChange = (event) =>
    {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="relative max-w-lg mx-auto search_bar_container">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* {query && (
                <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-2 text-gray-500"
                >
                    ✖
                </button>
            )} */}
        </div>
    );
};

export default Search;
