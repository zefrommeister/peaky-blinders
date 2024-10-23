"use client";

import AnimatedBackground from '../../components/AnimatedBackground';
import NavigationBar from '../../components/NavigationBar';
import Transition from '@/components/Transition';

export default function Countdown() {
    return (
    <Transition>
      <AnimatedBackground>
        <NavigationBar />
        <div>
          <h1>Movie Countdown</h1>
          <p>This page will contain the movie countdown information.</p>
        </div>
      </AnimatedBackground>
    </Transition>
    );
  }