import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { handleUsernameChange } from '../../redux/action';



function CreateUser() {
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(handleUsernameChange(userInput))
        setUserInput('');
        
    }
    
    

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                
                <label htmlFor='username'>Enter a Username</label>
                <input className={styles.createUser} id='username' 
                type='text' onChange={handleInput} value={userInput}></input>
                
                <input className={styles.submit} type='submit' value={'Got It!'}/>
            </form>
        </div>
    )
}

export default CreateUser
