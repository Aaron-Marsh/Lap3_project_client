import { motion } from 'framer-motion'
import styles from './PodiumStep.module.css'

export default function PodiumStep({ podium, winner }) {
  const offset = podium.length - winner.position
  if (winner.position <= 2) {
    return (
      <div
        className={styles.upperPodium}
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
            className={styles.medals}
            src={`${winner.trophy}`}
            alt=""
            style={{
              width: '3vw',
              overflow: 'hidden',
              height: '3vw',
              borderRadius: 9999
            }}
          />
        </motion.div>

        <motion.div
          className={styles.upperPodiumInner}
          style={{
            width: '6vw',
            placeContent: 'center',
            display: 'grid',
            justifyContent: 'center',
            justifyItems: 'center',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            backgroundColor: '#26547C',
            marginBottom: -1,
            filter: `opacity(${0.25 + offset / (podium.length + 3)})`,
            fontFamily: 'var(--text-font)'
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              height: 30 + 120 * (offset / podium.length),
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
          <p className='podiumText' style={{ color: 'white', alignSelf: 'flex-end' }}>
            {winner.name}
          </p>
          <p className='podiumText' style={{ color: 'white', alignSelf: 'flex-end' }}>
            Score: {winner.score}
          </p>
        </motion.div>
      </div>
    )
  } else {
  return (
    <div
      style={{
        flexDirection: 'column',
        placeContent: 'center'
      }}
      className={styles.lowerPodium}
    >
      <motion.div
          className={styles.lowerPodiumInner}
          style={{
          width: '6vw',
          placeContent: 'center',
          display: 'grid',
          justifyContent: 'center',
          justifyItems: 'center',
          borderTopLeftRadius: '.5rem',
          borderTopRightRadius: '.5rem',
          backgroundColor: '#26547C',
          marginBottom: -1,
          filter: `opacity(${0.25 + offset / (podium.length + 3)})`,
          fontFamily: 'var(--text-font)'
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            height: 30 + 120 * (offset / podium.length),
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
        <p className='podiumText' style={{ color: 'white', alignSelf: 'flex-end' }}>
          {winner.name}
        </p>
        <p className='podiumText' style={{ color: 'white', alignSelf: 'flex-end' }}>
          Score: {winner.score}
        </p>
      </motion.div>
    </div>
  )
}
}
