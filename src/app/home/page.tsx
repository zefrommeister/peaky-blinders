"use client";

import AnimatedBackground from '../../components/AnimatedBackground';
import NavigationBar from '../../components/NavigationBar';
import Transition from '@/components/Transition';

export default function Home() {
    return (
        <Transition>
        <AnimatedBackground>
            <NavigationBar />
            <div>
                <h1>About Us</h1>
                <p></p>
            </div>
        </AnimatedBackground>
        </Transition>
    );
  }
  