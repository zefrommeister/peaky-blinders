"use client";

import React, { useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Transition from '@/components/Transition';
import CountdownTimer from '@/components/countdown';
import { isDateInPast } from '../../components/helper';
import styles from './page.module.css';

const countdownDate = new Date('2026-01-01T00:00:00Z');

export default function Countdown() {
  useEffect(() => {
    // Set the background color of the entire page to black
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    // Clean up: Reset background color when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <Transition>
      <NavigationBar />
        <main className={styles.main}>
        {
          !isDateInPast(countdownDate) &&
          <CountdownTimer
            deadline={countdownDate}
            title={'Possible Movie Release Date'}
          />
        }
      </main>
    </Transition>
  );
}
