// components/FamilyMember.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface FamilyMemberProps {
  name: string;
  relation: string;
  imageUrl: string;
  charstatus: string
}

const FamilyMember: React.FC<FamilyMemberProps> = ({ name, relation, imageUrl, charstatus}) => {
  return (
    <Card className="w-54 h-70 flex flex-col items-center text-center shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="flex flex-col items-center mt-4">
        <Image src={imageUrl} alt={name} width={90} height={90} className="rounded-full" />
        <CardTitle className="mt-4 text-lg font-bold">{name}</CardTitle>
        <CardDescription className="text-gray-500">{relation}</CardDescription>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
            <Badge variant="secondary" className="bg-black text-white hover:bg-gray-800">Current Status</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>{charstatus}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
    </Card>
  );
};

export default FamilyMember;
