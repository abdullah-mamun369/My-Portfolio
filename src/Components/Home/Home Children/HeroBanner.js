import React, { useEffect, useState } from 'react';
import "../Home.css"

const HeroBanner = () => {
    const [sentence, setSentence] = useState('');
    const [showCursor, setShowCursor] = useState('|');
    const fullSentences = ['Mamun Abdullah', 'a MERN stack developer'];

    useEffect(() => {
        let i = 0;
        let j = 0;
        let isReverse = false;
        const forwardTimer = 120;
        const backwardTimer = 20;
        const stopTimer = 2000;
        const cursorTimer = 300;

        const updateTimer = (intervalTime, timeOut = false) => {
            clearInterval(interval);
            if (timeOut) {
                const cursorInterval = setInterval(() => {
                    setShowCursor((prev) => !prev)
                }, cursorTimer);

                setTimeout(() => {
                    clearInterval(cursorInterval);

                    interval = setInterval(typeWriter, intervalTime);
                    clearInterval(cursorInterval);
                }, stopTimer)
            } else {
                interval = setInterval(typeWriter, intervalTime);
            }
        }

        const typeWriter = () => {
            if (i > fullSentences[j].length) {
                isReverse = true;
                i--;
                updateTimer(backwardTimer, true);
            }
            if (isReverse && i === 0) {
                isReverse = false;
                i = 0;
                j = (j + 1) % fullSentences.length;
                setSentence('');
                updateTimer(forwardTimer);
            }
            // setSentence(fullSentences[j].substring(0, i) + '|');
            setSentence(fullSentences[j].substring(i, 0));
            i = isReverse ? i - 1 : i + 1;
        }

        let interval = setInterval(typeWriter, forwardTimer);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='w-screen h-screen hero-banner'>
            <div className='h-full ml-[53vw] w-[600px] my-auto flex items-center'>
                <div className='text-white'>
                    <h1 className=' text-4xl uppercase text-left font-bold'>I'm <span className='text-primary'>{sentence}{showCursor ? '_' : ''}</span></h1>
                    <p className='my-5'>I'm a MERN Stack Developer and UI/UX Designer based in Comilla, Bangladesh. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                    <link className='btn' rel="stylesheet" href="" />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;