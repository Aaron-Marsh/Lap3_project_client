import React, { useState, useEffect } from 'react'
import podiumData from './data'
import Podium from './Podium'
import './index.css'

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState(podiumData);

  async function getScores() {
    const options = {
      method: 'GET'
    }
    try {
      const result = await fetch(`https://lap3quizzer.herokuapp.com/scores`, options)
      let data = await result.json();
      data = data.rows;
      data = data.map((winner, position) => ({ ...winner, position }))

      const trophyImgs = ['https://i.imgur.com/sRcjCDA.png', 'https://i.imgur.com/LZr8Arh.png', 'https://i.imgur.com/eGgxQKa.png']

      for (let i = 0; i < 3; i++) {
        let datum = data[i]
        let trophy = trophyImgs[i]
        data[i] = { ...datum, trophy }
      }
      setLeaderboard(data)
    } catch (error) {
      return(error);
    }
  }

  useEffect(() => {
    getScores()
  }, [])

  return (
    <div className="leaderboard" style={{width:'100%'}}>
      <Podium winners={leaderboard} />
      <div id='mobilePodiumDiv'></div>
    </div>
  )
}
