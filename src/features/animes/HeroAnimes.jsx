import styles from './HeroAnimes.module.css';

import { useState, useEffect } from 'react';


export const HeroAnimes = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (currentIndex === 3) {
    //             setCurrentIndex(0);
    //             return;
    //         }
    //         setCurrentIndex(prev => prev + 1);
    //     }, 4000)
    // })

    // const changeIndex = () => {


    // }

    return (
        <>
            <div className={styles[`backgroundImage${currentIndex}`]}>
                <div className={styles.content}>
                    <h2>Hell's Paradise</h2>
                    <p>Set in the Edo period of Japan, it follows the ninja Gabimaru and the executioner Yamada Asaemon Sagiri as they search for the elixir of immortality.</p>
                    <button>Watch Now</button>
                </div>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                </div>
            </div>

        </>
    )
}