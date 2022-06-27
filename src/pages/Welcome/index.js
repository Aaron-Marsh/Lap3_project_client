import React from 'react'
import styles from './index.module.css'

function Welcome() {
  const routeChange = () => {
    window.location.href='/setup';
  }
  return (
    <>
      <h2 aria-label='heading'>Welcome Page</h2>
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
