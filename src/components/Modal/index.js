import React from 'react';
import styles from './index.module.css'

function Modal({closeModal}) {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.titleCloseBtn}>
                    <button onClick={() => closeModal(false)}>x</button>
                </div>
                <div className={styles.title}>
                    <h2>text</h2>
                </div>
                    
                <div className={styles.body}>
                    <p>text</p>
                </div>
                    
                <div className={styles.footer}>
                    <button onClick={() => closeModal(false)}>I Get It!</button>
                </div>
            </div>

        </div>
    )
}

export default Modal
