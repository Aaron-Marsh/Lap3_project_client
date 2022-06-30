import React from 'react';
import styles from './index.module.css'

function Modal({closeModal}) {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.titleCloseBtn}>
                    {/* <button onClick={() => closeModal(false)}>x</button> */}
                </div>
                <div className={styles.title}>
                    <h2>Need a hand? 🕒</h2>
                </div>
                    
                <div className={styles.body}>
                    <h4>Starting a game</h4>
                    <ol>
                        <li>Enter your username</li>
                        <li>Select how many players</li>
                        <li>Choose a difficulty</li>
                        <li>Choose a topic</li>
                        <li>Choose the amount of questions</li>
                        <li>Start the quiz!</li>
                    </ol>

                    <h4>Playing the game</h4>
                    <p>The question will be displayed on your screen, at which point you will be given 10 seconds to choose an answer. 
                    
                    Once you choose an answer the tile will either flash green for correct or red for incorrect.
                    
                    The amount of points you are awarded for a correct answer is calculated by our very clever and secret algorithm.
                    
                    Current scores and game Leaderboards are displayed in your window.</p>

                    <h4>End of the game</h4>
                    <p>All good things must come to an end and so has your game 😞. It's okay, we've got you! Just click on create new to be redirected to the setup page where you can choose a different category or select play again to restart with the same setup.

                    If you want to see the all time high scores then just click on the Leaderboards section to see where you stand.
                    </p>

                </div>
                    
                <div className={styles.footer}>
                    <button onClick={() => closeModal(false)}>I Get It!</button>
                </div>
            </div>

        </div>
    )
}

export default Modal
