import React from 'react'
import { useNavigate } from "react-router-dom";

import { Leaderboard, LeaderboardProps } from '../../components'
import styles from './index.module.css'

let data = [
  {
    id: '1tfjiELNrwYAJeafRYlT9RwOIiD',
    name: 'Grace',
    score: 100
  },
  {
    id: '1tfjiFoinFrbdLWlPI52dRLhNlD',
    name: 'Bob',
    score: 98
  },
  {
    id: '1tfjiDIAS8f2UYgV9ynCqWi7rZD',
    name: 'Ada',
    score: 50
  },
  {
    id: '1tfjiEIWBZz2I9lOQYTEeMICALg',
    name: 'Grete',
    score: 20
  },
  {
    id: '1tfjiCMU9SdFM9BAaIF3mS5UpYf',
    name: 'Chieko',
    score: 10
  },
  {
    id: '6',
    name: 'Grace',
    score: 9
  },
  {
    id: '7',
    name: 'Bob',
    score: 8
  },
  {
    id: '8',
    name: 'Ada',
    score: 7
  },
  {
    id: '9',
    name: 'Grete',
    score: 6
  },
  {
    id: '10',
    name: 'Chieko',
    score: 5
  }]

function Leaderboards() {
  let navigate = useNavigate();
    const routeChange = () => {
        navigate('/');
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
            <LeaderboardProps data={data}/>
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
