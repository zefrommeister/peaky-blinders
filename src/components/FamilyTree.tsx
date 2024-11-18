"use client";

import React, {useEffect } from 'react';
import FamilyMember from './FamilyMember';
import Transition from '../components/Transition';
import { Toaster } from '../components/ui/toaster'
import { useToast } from "@/hooks/use-toast"

const FamilyTree: React.FC = () => {

  const { toast } = useToast()

  useEffect(() => {
    // Set the background color of the entire page to black
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    toast({
      title: "Tip",
      description: "Hover the black bar to reveal character's status",
      className: "bottom-center",
    });

    // Clean up: Reset background color when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [toast]);

  return (
    <div className="container mx-auto p-8 transition-colors duration-500 bg-black text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-center">Family Grid</h1>
      </div>
      <Transition>
        <div className="grid grid-cols-4 gap-4">
          <FamilyMember name="Tommy Shelby" relation="Head of Family" imageUrl="/images/tommy-shelby.jpg" charstatus="Alive" />
          <FamilyMember name="Arthur Shelby" relation="Elder Brother" imageUrl="/images/arthur-shelby.jpg" charstatus="Alive" />
          <FamilyMember name="John Shelby" relation="Younger Brother" imageUrl="/images/john-shelby.jpg" charstatus="Deceased" />
          <FamilyMember name="Grace Shelby" relation="Ex-wife of Thomas Shelby" imageUrl="/images/grace-shelby.jpg" charstatus="Deceased" />
          <FamilyMember name="Polly Gray" relation="Aunt" imageUrl="/images/polly-gray.jpg" charstatus="Deceased"/>
          <FamilyMember name="Aberama Gold" relation="Husband of Polly Gray" imageUrl="/images/aberama-gold.jpg" charstatus="Deceased"/>
          <FamilyMember name="Michael Gray" relation="Son of Polly Gray" imageUrl="/images/michael-gray.jpg" charstatus="Deceased"/>
          <FamilyMember name="Ada Thorne" relation="Sister" imageUrl="/images/ada-thorne.jpg" charstatus="Alive"/>
          <FamilyMember name="Finn Shelby" relation="Youngest Brother" imageUrl="/images/finn-shelby.jpg" charstatus="MIA"/>
          <FamilyMember name="Elizabeth Stark" relation="Wife of Thomas Shelby" imageUrl="/images/lizzie-stark.jpg" charstatus="Alive"/>
          <FamilyMember name="Johnny Dogs" relation="Close Friend of Thomas Shelby" imageUrl="/images/johnny-dogs.jpg" charstatus="Alive"/>
          <FamilyMember name="Isiah Jesus" relation="Close Friend of Finn Shelby" imageUrl="/images/isiah.jpg" charstatus="Alive"/>
        </div>
      </Transition>
      <Toaster />
    </div>
  );
};

export default FamilyTree;
