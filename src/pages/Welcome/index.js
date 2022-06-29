import React, {useState} from 'react';
import styles from './index.module.css'



import { CreateUser, Modal, Loading } from '../../components';

function Welcome() {

  const[openModal, setOpenModal] = useState(false)
  
  return (
    <>
      <h2 aria-label='heading'>Welcome Page</h2>
        <div className={styles.container}>
          
          <div className={styles.frame}>
            <p className={styles.intro}>Welcome to About Time. The quiz game you can play on your own or with friends. If you want to jump straight into setting up a game, enter a username and click the 'Got it!' button below.</p>
            
            <CreateUser />

            <div>
              <p className={styles.help}>If you've never played before or want a refresher on how to play then click the Help button.</p>

              <button className={styles.btn}
              onClick={ ()=> {
              setOpenModal(true)
              }}>
              Help
              </button>
              {openModal && <Modal closeModal={setOpenModal} />}
            </div>
              {/* <Loading /> */}
          </div>
          
        </div> 
    </>
  )
}

export default Welcome;
