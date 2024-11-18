"use client";

import FamilyTree from '../../components/FamilyTree';
import NavigationBar from '../../components/NavigationBar';
import Transition from '../../components/Transition';

export default function Characters() {

  return (
      <Transition>
        <div className="flex flex-col items-center justify-between min-h-screen">
          <NavigationBar />
          {/* Main Content */}
          <main className="flex-grow flex flex-col items-center justify-center">
            <FamilyTree />
          </main>
        </div>
      </Transition>
  );
}
