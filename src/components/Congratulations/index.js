import React from 'react'
import Confetti from "react-confetti";
import styles from './index.module.css'

function Congratulations() {
    return(
        <>
        <Confetti />
            {/* <div className={styles.container}> */}
                <div className={styles.waviy}>
                    <span >C</span>
                    <span >O</span>
                    <span >N</span>
                    <span >G</span>
                    <span >R</span>
                    <span >A</span>
                    <span >T</span>
                    <span >U</span>
                    <span >L</span>
                    <span >A</span>
                    <span >T</span>
                    <span >I</span>
                    <span >O</span>
                    <span >N</span>
                    <span >S</span>
                </div>
            {/* </div> */}
        </>
    )
}

export default Congratulations
