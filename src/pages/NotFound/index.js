import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import styles from './index.module.css'

const NotFound = () => {
    const location = useLocation()
    
    return (
        <>
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
                <h1 className={styles.intro}>Whoops! Seems like you may be lost, click the link to <Link to='/'>Go back to main page</Link> </h1>
                
                </div >
        
            </div> 

        </div>
    
        
        </>
    )
}

export default NotFound
