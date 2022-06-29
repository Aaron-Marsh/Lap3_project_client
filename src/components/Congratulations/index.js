import React from 'react'
import Confetti from "react-confetti";
import styles from './index.module.css'

function Congratulations() {
    return(
        <>
        <Confetti />
            <div className={styles.container}>
                <h1>Congratulations</h1>
            </div>
        </>
    )
}

export default Congratulations
