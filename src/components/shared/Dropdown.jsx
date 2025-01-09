// Dropdown.js
import React, { useState, useRef, useEffect } from 'react';
import './dropdown.scss'; // Optional, for any custom styles

const Dropdown = ({ options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
], label }) =>
{
    // State to manage the dropdown visibility and selected option
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const dropdownRef = useRef();
    // Close the dropdown if clicked outside of it
    useEffect(() =>
    {
        const handleClickOutside = (event) =>
        {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle item click
    const handleSelect = (option) =>
    {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative dropdown_container" ref={dropdownRef}>
            {/* Label for the dropdown */}
            {label && <label className="block text-sm font-medium mb-2">{label}</label>}

            {/* Dropdown button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {selectedOption ? selectedOption.label : 'Select an option'}
            </button>

            {/* Dropdown options */}
            {isOpen && (
                <div className="absolute mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10">
                    <ul>
                        {options.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
