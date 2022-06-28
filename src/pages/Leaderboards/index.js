import React from 'react'
import { Leaderboard } from '../../components'
import styles from './index.module.css'
import { useSelector } from 'react-redux';

function Leaderboards() {
  let username = useSelector(state => state.username)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.frame}>
          <h1 className={styles.intro}>Top 10 Leaderboard</h1>
          <h2>Welcome {username}</h2> {/* proof of redux working from welcome, can be amended later */}
          <Leaderboard />
        </div>
      </div>
    </>
  )
}

export default Leaderboards
