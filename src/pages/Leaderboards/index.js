import React from 'react'


import { Leaderboard } from '../../components'
import styles from './index.module.css'

function Leaderboards() {
  
    const routeChange = () => {
      window.location.href="https://about-time.netlify.app/"
    }

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
            <h1 className={styles.intro}>Top 10 Leaderboard</h1>
            <Leaderboard />
            <button className={styles.btn}
              onClick={routeChange}>
              Home
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leaderboards
