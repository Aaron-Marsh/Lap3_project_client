import react from 'react';
import Question from '../../components/Question'
import styles from './index.module.css'

const Quiz = () => {
    return (
        <>
        <div className={styles.container}>
          

          <div className={styles.area} >
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div className={styles.frame}>
        <Question />
            </div>
        </div>
        </div>
        </>
    )
}

export default Quiz;
