import React from 'react'
import { Leaderboard } from '../../components'
import styles from './index.module.css'

function Leaderboards() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.frame}>
          <h1 className={styles.intro}>Top 10 Leaderboard</h1>
          <Leaderboard />
        </div>
      </div>
    </>
  )
}

export default Leaderboards
