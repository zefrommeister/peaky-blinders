"use client";

// app/page.tsx
import FamilyTree from '../components/FamilyTree';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  return (
    <AnimatedBackground>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <FamilyTree />
      </main>
    </AnimatedBackground>
  );
}
