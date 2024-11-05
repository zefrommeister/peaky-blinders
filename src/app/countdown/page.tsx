"use client";

import AnimatedBackground from '../../components/AnimatedBackground';
import NavigationBar from '../../components/NavigationBar';
import Transition from '@/components/Transition';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Countdown() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Counting Down</title>
          <meta name="description" content="Movie countdown" />
        </Helmet>

        <AnimatedBackground>
          <Transition>
            <NavigationBar />
            <div>
              <h1>Movie Countdown</h1>
              <p>This page will contain the movie countdown information.</p>
            </div>
          </Transition>
        </AnimatedBackground>
      </HelmetProvider>
    );
}
