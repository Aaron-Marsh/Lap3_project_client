import React from 'react'
import {useLocation, Link} from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()



    return (
        <>
        <p>{location.pathname} not found </p>
        <Link to='/'>Go back to main page</Link>
        </>
    )
}

export default NotFound