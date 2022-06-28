import React, { useState } from 'react'
import styles from './index.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

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
        routeChange();
    }
    
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/leaderboards'); // this can be changed later, for now, just proof of redux working properly
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
