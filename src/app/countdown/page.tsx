"use client";

import React, { useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Transition from '@/components/Transition';

export default function Countdown() {
  useEffect(() => {
    // Set the background color of the entire page to black
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    // Clean up: Reset background color when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <Transition>
      <NavigationBar />
      <div className="text-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Movie Countdown</h1>
        <p>This page will contain the movie countdown information.</p>
      </div>
    </Transition>
  );
}
