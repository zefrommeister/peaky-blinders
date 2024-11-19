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
          <FamilyMember name="Tommy Shelby" relation="Head of Family" imageUrl="/images/tommy-shelby.jpg" charstatus="Alive" hoverImageUrl= "/hover-images/tommy-shelby.jpg" description= "Thomas Michael ‘Tommy’ Shelby OBE DCM MM MP is the main protagonist of the Peaky Blinders. He is the son of Arthur and Mrs. Shelby, brother of Arthur, John, Ada and Finn Shelby, father of Duke, Charles and Ruby Shelby, as well as being the husband of Grace and Lizzie Shelby. He is the leader of the Birmingham criminal gang, the Peaky Blinders and the patriarch of the Shelby Family."/>
          <FamilyMember name="Arthur Shelby" relation="Elder Brother" imageUrl="/images/arthur-shelby.jpg" charstatus="Alive" hoverImageUrl= "/hover-images/arthur-shelby.jpg" description= "Arthur Shelby Jr. is one of the main protagonists of the Peaky Blinders. He is the eldest son of Arthur and Mrs Shelby, older brother of Thomas, John, Ada and Finn Shelby, as well as being the father of Billy Shelby. He was married to Linda Shelby and is a tough member of the Peaky Blinders. He is also Deputy Vice President of Shelby Company Limited and a member of the ICA, acting as his brother's right-hand man. " />
          <FamilyMember name="John Shelby" relation="Younger Brother" imageUrl="/images/john-shelby.jpg" charstatus="Deceased" hoverImageUrl= "/hover-images/john-shelby.jpg" description= "John Michael Shelby (also known as Johnny and John Boy) is one of the two former tritagonists (alongside Polly Gray) of Peaky Blinders. He is a British street gangster who was a soldier during the First World War. He is the third son of Arthur Shelby Sr, brother of Arthur, Thomas, Ada and Finn Shelby, as well as being the husband of Esme Shelby. John has seven children, two sons and two daughters with his deceased first wife Martha Shelby, and three children with Esme, whose genders are unknown. "/>
          <FamilyMember name="Grace Shelby" relation="Ex-wife of Thomas Shelby" imageUrl="/images/grace-shelby.jpg" charstatus="Deceased" hoverImageUrl = "/hover-images/grace-shelby.jpg" description= "" />
          <FamilyMember name="Polly Gray" relation="Aunt" imageUrl="/images/polly-gray.jpg" charstatus="Deceased" hoverImageUrl = "/hover-images/polly-gray.jpg" description= "Elizabeth Pollyanna Polly Gray (née Shelby) is one of the two former tritagonists (alongside John Shelby) of Peaky Blinders. She is the mother of Michael and Anna Gray, aunt of Arthur, Thomas, John, Ada and Finn Shelby, as well as being the matriarch of the Shelby Family. She is part of the Birmingham criminal gang, the Peaky Blinders, a certified accountant and company treasurer of Shelby Company Limited."/>
          <FamilyMember name="Aberama Gold" relation="Husband of Polly Gray" imageUrl="/images/aberama-gold.jpg" charstatus="Deceased" hoverImageUrl = "/hover-images/aberama-gold.jpg" description= "" />
          <FamilyMember name="Michael Gray" relation="Son of Polly Gray" imageUrl="/images/michael-gray.jpg" charstatus="Deceased" hoverImageUrl = "/hover-images/michael-gray.jpg" description= "Michael Gray is a major protagonist turned final antagonist of Peaky Blinders, serving as a supporting character in Season 2, one of the main characters of Season 3 -Season 5, and a major antagonist in Season 6. He is the son of Polly Gray and the cousin of the Shelby siblings." />
          <FamilyMember name="Ada Thorne" relation="Sister" imageUrl="/images/ada-thorne.jpg" charstatus="Alive" hoverImageUrl = "/hover-images/ada-thorne.jpg" description= "Ada Thorne (née Shelby) is the tritagonist of Peaky Blinders. She is the fourth and only female of the Shelby siblings and the only sibling initially not involved with the Peaky Blinders. By the end of 1924, however, Ada assumes a leading position at the United States branch of Shelby Company Limited, dealing only with legal acquisitions; unlike her brothers back home in Birmingham, England." />
          <FamilyMember name="Finn Shelby" relation="Youngest Brother" imageUrl="/images/finn-shelby.jpg" charstatus="MIA" hoverImageUrl = "/hover-images/finn-shelby.jpg" description= "Finn Shelby is a major character-turned-final antagonist of Peaky Blinders, serving as a supporting character in Season 1 and Season 2, a major character in Season 3, Season 4, Season 5 and the majority of Season 6, before becoming the final antagonist of the season. He is the youngest member of the Peaky Blinders, a son of Arthur Shelby Sr. and Mrs. Shelby and the youngest brother of Arthur, Thomas, John, and Ada Shelby. " />
          <FamilyMember name="Elizabeth Stark" relation="Wife of Thomas Shelby" imageUrl="/images/lizzie-stark.jpg" charstatus="Alive" hoverImageUrl = "/hover-images/lizzie-stark.jpg" description= "Elizabeth “Lizzie” Shelby (née Stark) is the second wife of Thomas Shelby, mother of Ruby Shelby, and stepmother of Thomas’ elder son, Charles Shelby." />
          <FamilyMember name="Johnny Dogs" relation="Close Friend of Thomas Shelby" imageUrl="/images/johnny-dogs.jpg" charstatus="Alive" hoverImageUrl = "/hover-images/johnny-dogs.jpg" description= "" />
          <FamilyMember name="Isiah Jesus" relation="Close Friend of Finn Shelby" imageUrl="/images/isiah.jpg" charstatus="Alive" hoverImageUrl = "/hover-images/isiah-jesus.jpg" description= "" />
        </div>
      </Transition>
      <Toaster />
    </div>
  );
};

export default FamilyTree;
