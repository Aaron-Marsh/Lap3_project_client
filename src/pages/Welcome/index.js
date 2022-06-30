import React, {useState} from 'react';
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom';

import { CreateUser, Modal, } from '../../components';
let Logo = require( '../../assests/time-cropped.png')

function Welcome() {

  const[openModal, setOpenModal] = useState(false)
  const navigate = useNavigate();
  
  const onLeaderboardsClick = e => {
      e.preventDefault();
      let path = (window.location.href = '/leaderboards');
    navigate(path);
  }
  
  return (
    <>
      {/* <h2 aria-label='heading'>Welcome Page</h2> */}
        <div className={styles.container}>
          

          <div className={styles.area} >
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    



          <div className={styles.frame}>
              
            <img src={Logo} alt-="About Time logo" className={styles.logo}></img>
              

            <p className={styles.intro}>Welcome to About Time. The quiz game you can play on your own or with friends. If you want to jump straight into setting up a game, enter a username and click the 'Let's Go!' button below.</p>
            
            <CreateUser />

            <div>
              <p className={styles.help}>If you've never played before or want a refresher on how to play then click the Help button.</p>

              <button className={styles.btn}
              onClick={ ()=> {
              setOpenModal(true)
              }}>
              Help
              </button>
              <button className={styles.btn} onClick={onLeaderboardsClick}>Leaderboards</button>
              {openModal && <Modal closeModal={setOpenModal} />}
            </div>
              {/* <Loading /> */}
          </div>
           
          </div >
        </div> 
    </>
  )
}

export default Welcome;
