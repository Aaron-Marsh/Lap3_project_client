import React, { useState, useEffect } from 'react'
import podiumData from './data'
import Podium from './Podium'
import './index.css'


export default function Leaderboard(props) {
  const [leaderboard, setLeaderboard] = useState(podiumData);
  
  function getScores() {
    let data = props.data.map((winner, position) => ({ ...winner, position }))
    
    const trophyImgs = ['https://i.imgur.com/sRcjCDA.png', 'https://i.imgur.com/LZr8Arh.png', 'https://i.imgur.com/eGgxQKa.png']
    
    for (let i = 0; i < 3; i++) {
      let datum = data[i]
      let trophy = trophyImgs[i]
      data[i] = { ...datum, trophy }
    }
    setLeaderboard(data)
  }

  useEffect(() => {
    getScores()
  }, [])

  return (
    <div className="leaderboard" style={{ width: '100%' }}>
      <Podium winners={leaderboard} />
      <div id='mobilePodiumDiv'></div>

    </div>
  )
}
