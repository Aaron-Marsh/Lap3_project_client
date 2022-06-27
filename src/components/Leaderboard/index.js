import podiumData from './data'
import Podium from './Podium'

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <Podium winners={podiumData} />
    </div>
  )
}
