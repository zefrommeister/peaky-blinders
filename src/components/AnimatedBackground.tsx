import React, { ReactNode } from 'react';

// Define props type for children
interface AnimatedBackgroundProps {
  children: ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.gif')" }}
    >
      {children}
    </div>
  );
};

export default AnimatedBackground;
