// components/FamilyMember.tsx
"use client";

import React from 'react';
import Image from 'next/image';

interface FamilyMemberProps {
  name: string;
  relation: string;
  imageUrl: string;
}

const FamilyMember: React.FC<FamilyMemberProps> = ({ name, relation, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-md p-4 rounded-md text-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <Image src={imageUrl} alt={name} width={80} height={80} className="rounded-full mx-auto" />
      <h3 className="mt-2 text-lg font-bold dark:text-white">{name}</h3>
      <p className="text-gray-500 dark:text-gray-400">{relation}</p>
    </div>
  );
};

export default FamilyMember;
