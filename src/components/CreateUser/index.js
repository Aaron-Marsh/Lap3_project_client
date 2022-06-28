import React from 'react'
import styles from './index.module.css'

function CreateUser() {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <label htmlFor='username'>Enter a Username</label>
                <input className={styles.createUser} id='username' 
                type='text'></input>
                <input className={styles.submit} type='submit' value='Got It!'/>
            </form>
        </div>
    )
}

export default CreateUser
