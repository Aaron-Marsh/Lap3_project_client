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

            <p>If its your first time here or you need a refresher on how to play then click the 'Help' button below.</p>
          </div>

          <div className='buttons'>
            
            <button role='help' className={styles.btn} onClick={() => setOpen(o => !o)}>Help!</button>
              
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                  <a className="close" onClick={closeModal}>
                  &times;
                  </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                    omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperia doloribus. Odit, aut.
                </div>
              </Popup>

            <button role='setup' className={styles.btn} onClick={routeChange}>Got it!</button>
          </div>
          
        </div> 
    </>
  )
}

export default Welcome;
