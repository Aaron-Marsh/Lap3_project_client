import PodiumStep from './PodiumStep'

export default function Podium({ winners }) {
  let theseWinners = winners;

  for (let i = 0; i < 3; i++) {
    let datum = theseWinners[i]
    if(!datum.id){
      let id = Math.random()
      theseWinners[i] = { ...datum, id }
    }
  }

  const podium = [4, 2, 0, 1, 3]
    .reduce((podiumOrder, position) => [...podiumOrder, theseWinners[position]], [])
    .filter(Boolean)

  

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column dense',
        gap: '.5rem',
        marginTop: '2rem',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottom: '1px solid #e5e7eb',
        height: 'fit-content'
      }}
    >
      {podium.map((winner) => (
        <PodiumStep key={String(winner.id)} podium={podium} winner={winner} />
      ))}
    </div>
  )
}
