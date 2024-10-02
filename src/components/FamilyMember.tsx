"use client";    

// components/FamilyMember.tsx
import React from 'react';
import Image from 'next/image';

interface FamilyMemberProps {
  name: string;
  relation: string;
  imageUrl: string;
}

const FamilyMember: React.FC<FamilyMemberProps> = ({ name, relation, imageUrl }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md text-center">
      <Image src={imageUrl} alt={name} width={80} height={80} className="rounded-full mx-auto" />
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="text-gray-500">{relation}</p>
    </div>
  );
};

export default FamilyMember;
