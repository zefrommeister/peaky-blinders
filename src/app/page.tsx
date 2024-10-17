"use client";

import FamilyTree from '../components/FamilyTree';
import AnimatedBackground from '../components/AnimatedBackground';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from 'next/link';  // Next.js Link component for client-side navigation

export default function Home() {
  return (
    <AnimatedBackground>
      <div className="flex flex-col items-center justify-between min-h-screen">
        
        {/* Navigation Menu */}
        <nav className="w-full bg-transparent text-white p-4">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center space-x-4">
              <NavigationMenuItem>
                <Link href="/home" legacyBehavior passHref>
                  <NavigationMenuLink className={`bg-gray-500 text-white p-2 rounded-md ${navigationMenuTriggerStyle()}`}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/characters" legacyBehavior passHref>
                  <NavigationMenuLink className={`bg-gray-500 text-white p-2 rounded-md ${navigationMenuTriggerStyle()}`}>
                    Characters
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/countdown" legacyBehavior passHref>
                  <NavigationMenuLink className={`bg-gray-500 text-white p-2 rounded-md ${navigationMenuTriggerStyle()}`}>
                    Countdown to Movie
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
          </NavigationMenu>
        </nav>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center">
          <FamilyTree />
        </main>
      </div>
    </AnimatedBackground>
  );
}
