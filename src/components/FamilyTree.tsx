"use client";

// components/FamilyTree.tsx
import React, { useState } from 'react';
import FamilyMember from './FamilyMember';

const FamilyTree: React.FC = () => {
  const [showExtendedFamily, setShowExtendedFamily] = useState(false);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Family Tree</h1>
      <div className="grid grid-cols-3 gap-6">
        <FamilyMember name="Tommy Shelby" relation="Head of Family" imageUrl="/images/tommy-shelby.jpg" />
        <FamilyMember name="Arthur Shelby" relation="Elder Brother" imageUrl="/images/arthur-shelby.jpg" />
        <FamilyMember name="John Shelby" relation="Younger Brother" imageUrl="/images/john-shelby.jpg" />
        {/* Add more family members as needed */}
      </div>
      
      <div className="text-center mt-8">
        <button
          onClick={() => setShowExtendedFamily(!showExtendedFamily)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {showExtendedFamily ? 'Hide Extended Family' : 'Show Extended Family'}
        </button>
      </div>

      {showExtendedFamily && (
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Additional Family Members */}
          <FamilyMember name="Polly Gray" relation="Aunt" imageUrl="/images/polly-gray.jpg" />
          <FamilyMember name="Ada Thorne" relation="Sister" imageUrl="/images/ada-thorne.jpg" />
          <FamilyMember name="Finn Shelby" relation="Youngest Brother" imageUrl="/images/finn-shelby.jpg" />
        </div>
      )}
    </div>
  );
};

export default FamilyTree;
