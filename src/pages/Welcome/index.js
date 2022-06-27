import React, {useState} from 'react'
import styles from './index.module.css'


import Popup from 'reactjs-popup';

function Welcome() {
  const routeChange = () => {
    window.location.href='/setup';
  }

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <h2 aria-label='heading'>Welcome Page</h2>
        <div className='container'>
          
          <div className='text'>
            <p>Welcome to About Time. The quiz game you can play on your own or with friends. If you want to jump straight into setting up a game click the 'Got it!' button below.</p>

            <p>If it's your first time here or you need a refresher on how to play then click the 'Help' button below.</p>
          </div>

          <div className='buttons'>
            
            <button role='help' className={styles.btn} onClick={() => setOpen(o => !o)}>Help!</button>
              
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                  <a className="close" onClick={closeModal}>
                  
                  </a>
                    <h3>Need a hand? 🕒</h3>

                    <h4>Starting a game</h4>
                    <p>Enter your username then select how many players, how hard you would like the quiz to be and the topic.</p>

                    <h4>Playing the game</h4>
                    <p>The question will be displayed on your screen, at which point you will be given 10 seconds to choose an answer. Once you choose an answer the tile will either flash green for correct or red for incorrect.
                    The amount of points you are awarded for a correct answer is calculated by our very clever algorithm which takes the time left and multiplies by a secret value.</p>

                </div>
              </Popup>

            <button role='setup' className={styles.btn} onClick={routeChange}>Got it!</button>
          </div>
          
        </div> 
    </>
  )
}

export default Welcome;
