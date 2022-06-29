import { motion } from 'framer-motion'

export default function PodiumStep({ podium, winner }) {
  const offset = podium.length - winner.position
  if (winner.position <= 2) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center'
        }}
      >
        <motion.div
          style={{
            alignSelf: 'center',
            marginBottom: '.25rem'
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                delay: offset,
                duration: 0.75
              }
            },
            hidden: { opacity: 0 }
          }}
        >
          <img
            src={`${winner.trophy}`}
            alt=""
            style={{
              width: '2.75rem',
              overflow: 'hidden',
              height: '2.75rem',
              borderRadius: 9999
            }}
          />
        </motion.div>

        <motion.div
          style={{
            width: '6rem',
            placeContent: 'center',
            display: 'grid',
            justifyContent: 'center',
            justifyItems: 'center',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            backgroundColor: '#26547C',
            marginBottom: -1,
            filter: `opacity(${0.25 + offset / (podium.length+3)})`,
            fontFamily: 'sans-serif'
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              height: 30 + 170 * (offset / podium.length),
              opacity: 1,
              transition: {
                delay: offset,
                duration: 2,
                ease: 'backInOut'
              }
            },
            hidden: { opacity: 0, height: 0 }
          }}
        >
          <p style={{ color: 'white', alignSelf: 'flex-end' }}>
            {winner.name}
          </p>
          <p style={{ color: 'white', alignSelf: 'flex-end' }}>
            Score: {winner.score}
          </p>
        </motion.div>
      </div>
    )
  } else{
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center'
        }}
      > 
        <motion.div
          style={{
            width: '6rem',
            placeContent: 'center',
            display: 'grid',
            justifyContent: 'center',
            justifyItems: 'center',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            backgroundColor: '#26547C',
            marginBottom: -1,
            filter: `opacity(${0.25 + offset / (podium.length+3)})`,
            fontFamily: 'sans-serif'
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              height: 30 + 170 * (offset / podium.length),
              opacity: 1,
              transition: {
                delay: offset,
                duration: 2,
                ease: 'backInOut'
              }
            },
            hidden: { opacity: 0, height: 0 }
          }}
        >
          <p style={{ color: 'white', alignSelf: 'flex-end' }}>
            {winner.name}
          </p>
          <p style={{ color: 'white', alignSelf: 'flex-end' }}>
            Score: {winner.score}
          </p>
        </motion.div>
      </div>
    )
  }
}
