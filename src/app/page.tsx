"use client";

import FamilyTree from '../components/FamilyTree';
import AnimatedBackground from '../components/AnimatedBackground';
import NavigationBar from '../components/NavigationBar';
import Transition from '../components/Transition';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Characters() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Meet Us</title>
        <meta name="description" content="The Peaky Blinders gang" />
      </Helmet>

      <AnimatedBackground>
        <Transition>
          <div className="flex flex-col items-center justify-between min-h-screen">
            <NavigationBar />
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center">
              <FamilyTree />
            </main>
          </div>
        </Transition>
      </AnimatedBackground>
    </HelmetProvider>
  );
}
