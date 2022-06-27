import React from 'react'
import { useNavigate } from 'react-router-dom';
import Setup from '../Setup';
import styles from './index.module.css'

function Welcome() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path =  window.location.href='/setup';
    navigate(path);
  }
  return (
    <>
      <h2>Welcome Page</h2>
        <div className='container'>
          
          <div className='text'>
            <p>Welcome to About Time. The quiz game you can play on your own or with friends. </p>
          </div>

          <div className='button'>
            <button role='setup' className={styles.btn} onClick={routeChange}>Got it!</button>
          </div>
          
        </div> 
    </>
  )
}

export default Welcome;
