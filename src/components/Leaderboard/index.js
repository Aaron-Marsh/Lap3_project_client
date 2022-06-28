import React, {useState, useEffect} from 'react'
import podiumData from './data'
import Podium from './Podium'

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState(podiumData);

  async function getScores() {
    const options = {
        method: 'GET'
    }
    const result = await fetch(`https://lap3quizzer.herokuapp.com/scores`, options)
    try {
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    let data = await result.json();
    data = data.rows;
    data = data.map((winner, position) => ({ ...winner, position }))

    const trophyImgs = ['https://i.imgur.com/sRcjCDA.png', 'https://i.imgur.com/LZr8Arh.png', 'https://i.imgur.com/eGgxQKa.png']

    for (let i=0; i<3;i++){
      let datum = data[i]
      let trophy = trophyImgs[i]
      data[i]={ ...datum, trophy }
    }

    setLeaderboard(data)
  }

  useEffect(()=>{
    getScores()

  }, [])
  console.log(leaderboard);

  return (
    <div className="leaderboard">
      <Podium winners={leaderboard} />
    </div>
  )
}
