"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import NavigationBar from '../components/NavigationBar';
import Transition from '@/components/Transition';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeContainer = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Creepster', cursive;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  letter-spacing: 0.2rem;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.9);
  margin-bottom: 20px;
  color: #ff5530;
  animation: ${fadeIn} 3s ease-in-out;
  font-family: 'SourceCodePro', sans-serif;
`;

const Home = () => {
  return (

      <AnimatedBackground>
        <Transition>
          <NavigationBar />

          <HomeContainer>
            <Title
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              The Peaky Blinders
            </Title>
          </HomeContainer>
        </Transition>
      </AnimatedBackground>
  );
};

export default Home;
