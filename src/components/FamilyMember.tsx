"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation"; // Updated import

interface FamilyMemberProps {
  name: string;
  relation: string;
  imageUrl: string;
  hoverImageUrl: string;
  charstatus: string;
  description: string;
}

const FamilyMember: React.FC<FamilyMemberProps> = ({
  name,
  relation,
  imageUrl,
  hoverImageUrl,
  charstatus,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); // Initialize router

  const navigateToDetails = () => {
    router.push(
      `/overview?name=${encodeURIComponent(name)}&hoverImageUrl=${encodeURIComponent(
        hoverImageUrl
      )}&description=${encodeURIComponent(description)}`
    ); // Navigate to details page with query parameters
  };

  return (
    <Card
      className="w-54 h-70 flex flex-col items-center text-center shadow-lg rounded-lg overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
      onClick={navigateToDetails} // Navigate to details
    >
      {/* Hover Image */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <Image
          src={hoverImageUrl}
          alt={`${name} hover image`}
          layout="fill" // Ensures the image fits the card
          objectFit="cover" // Ensures the image maintains its aspect ratio
          className="rounded-lg"
        />
      </div>

      {/* Original Content */}
      <div
        className={`flex flex-col items-center transition-opacity duration-500 ${
          isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <CardHeader className="flex flex-col items-center mt-4">
          <Image
            src={imageUrl}
            alt={name}
            width={90}
            height={90}
            className="rounded-full"
          />
          <CardTitle className="mt-4 text-lg font-bold">{name}</CardTitle>
          <CardDescription className="text-gray-500">{relation}</CardDescription>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge
                  variant="secondary"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Current Status
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{charstatus}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
      </div>
    </Card>
  );
};

export default FamilyMember;
