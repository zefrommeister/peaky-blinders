"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedBackground from '../../components/AnimatedBackground';
import NavigationBar from '../../components/NavigationBar';
import Transition from '@/components/Transition';
import { Helmet, HelmetProvider } from "react-helmet-async";

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

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 20px;
  animation: ${fadeIn} 4s ease-in-out;
  font-family: 'GeistMono', sans-serif;
`;

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Welcome to the Garrison</title>
        <meta name="description" content="Home of the Peaky Blinders" />
      </Helmet>

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

            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 3 }}
            >
              Beware... the red right hand....
            </Subtitle>
          </HomeContainer>
        </Transition>
      </AnimatedBackground>
    </HelmetProvider>
  );
};

export default Home;
