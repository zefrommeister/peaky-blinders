"use client";

import React, { useState, useEffect } from 'react';
import FamilyMember from './FamilyMember';

const FamilyTree: React.FC = () => {
  const [showExtendedFamily, setShowExtendedFamily] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check and apply initial dark mode state
  useEffect(() => {
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (darkModePreference) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`container mx-auto p-8 transition-colors duration-500 ${isDarkMode ? 'bg-black text-black' : 'bg-transparent text-black'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-bold text-center duration-500 text-white`}>Family Tree</h1>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <FamilyMember name="Tommy Shelby" relation="Head of Family" imageUrl="/images/tommy-shelby.jpg" />
        <FamilyMember name="Arthur Shelby" relation="Elder Brother" imageUrl="/images/arthur-shelby.jpg" />
        <FamilyMember name="John Shelby" relation="Younger Brother" imageUrl="/images/john-shelby.jpg" />
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowExtendedFamily(!showExtendedFamily)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          {showExtendedFamily ? 'Hide Extended Family' : 'Show Extended Family'}
        </button>
      </div>

      <div
        className={`grid grid-cols-3 gap-6 mt-6 transition-opacity duration-700 ease-in-out ${
          showExtendedFamily ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {showExtendedFamily && (
          <>
            <FamilyMember name="Polly Gray" relation="Aunt" imageUrl="/images/polly-gray.jpg" />
            <FamilyMember name="Ada Thorne" relation="Sister" imageUrl="/images/ada-thorne.jpg" />
            <FamilyMember name="Finn Shelby" relation="Youngest Brother" imageUrl="/images/finn-shelby.jpg" />
          </>
        )}
      </div>
    </div>
  );
};

export default FamilyTree;
