"use client"

import React, { useEffect, useState } from 'react'
import styles from './CountdownTimer.module.scss'

interface CountdownTimerProps {
    deadline: Date;
    title: string;
}

interface CountdownTimeLeft {
    days?: number;
    hrs?: number;
    mins?: number;
    secs?: number;
}

const INITIAL_TIME_LEFT = { days: 0, hr: 0, mins: 0, secs: 0 }

function CountdownTimer({ deadline, title }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT)

    useEffect(() => {
        function calculateTimeLeft(): CountdownTimeLeft {
            let timeLeft: CountdownTimeLeft = {};
            const currentDate = new Date();
            const difference = deadline.getTime() - currentDate.getTime();
    
            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    mins: Math.floor((difference / 1000 / 60) % 60),
                    secs: Math.floor((difference / 1000) % 60)
                };
            }
    
            return timeLeft;
        }
    
        setTimeLeft(calculateTimeLeft());
    
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
    }, [deadline]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>
    
            <div className={styles.timeWrapper}>
                {
                    Object.entries(timeLeft).map(([unit, value], index, array) => (
                        <div key={unit} className={styles.timeContainer}>
                            <div className={styles.valueContainer}>
                                {/* Dynamically create containers based on digit count */}
                                {String(value).padStart(2, '0').split('').map((digit, idx) => (
                                    <p key={idx} className={styles.value}>{digit}</p>
                                ))}
                                {index !== array.length - 1 && <span>:</span>}
                            </div>
                            <p className={styles.unit}>{unit}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
    
}

export default CountdownTimer