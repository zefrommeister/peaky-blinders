"use client";

// app/page.tsx
import FamilyTree from '../components/FamilyTree';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <FamilyTree />
    </main>
  );
}
